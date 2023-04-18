from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import io
import base64
from PIL import Image
import numpy as np
import cv2

app = Flask(__name__)
# CORS(app, origins=['https://main.d2b9edlio56cf1.amplifyapp.com/'])
CORS(app)

def extract_dominant_colors(img, num_colors):
    # Convert image to 1D numpy array
    pixels = np.float32(img.reshape(-1, 3))

    # Define criteria and apply k-means clustering
    criteria = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 10, 1.0)
    _, labels, centroids = cv2.kmeans(pixels, num_colors, None, criteria, 10, cv2.KMEANS_RANDOM_CENTERS)

    # Convert centroids to uint8 and reshape to 3D numpy array
    centroids = np.uint8(centroids)
    dominant_colors = centroids[labels.flatten()]
    dominant_colors = dominant_colors.reshape(img.shape)

    return dominant_colors

def segment_image(img):
    # Convert image to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_RGB2GRAY)

    # Threshold image to create binary mask
    _, mask = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY+cv2.THRESH_OTSU)

    # Apply mask to original image to extract foreground
    foreground = cv2.bitwise_and(img, img, mask=mask)

    return foreground

@app.route('/api/process_image', methods=['POST'])
def process_image():
    if 'image' not in request.files:
        return jsonify({'error': 'no file uploaded'}), 400

    file = request.files['image'].read()
    npimg = np.frombuffer(file, np.uint8)
    img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    
    # Extract dominant colors from image
    num_colors = 3
    dominant_colors = extract_dominant_colors(img, num_colors)
    
    # Segment image using dominant colors
    segmented_image = segment_image(dominant_colors)
    
    # Convert segmented image to PNG format and encode it as base64 string
    img_pil = Image.fromarray(segmented_image)
    buffer = io.BytesIO()
    img_pil.save(buffer, format='PNG')
    img_base64 = base64.b64encode(buffer.getvalue()).decode('utf-8')
    
    return img_base64

if __name__ == '__main__':
    app.run(host="0.0.0.0")

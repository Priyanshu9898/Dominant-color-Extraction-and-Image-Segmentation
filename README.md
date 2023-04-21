
# Dominant Color Extraction and Image Segmentation

## Project Description:

    This project is a web application for extracting dominant colors from an image and segmenting it based on those colors. The frontend is built using React and Chakra UI, allowing users to upload images, view the segmented image, and download the result. The backend is developed using Flask and processes the image using OpenCV.

## Project Structure

    dominant-color-extraction-and-image-segmentation/
    │
    ├── backend/
    │   ├── app.py
    │   └── requirements.txt
    │
    ├── frontend/
    │   ├── public/
    │   ├── src/
    │   │   ├── components/
    │   │   │   ├── ColorSegmentation.js
    │   │   │   └── Navbar.js
    │   │   ├── App.css
    │   │   ├── App.js
    │   │   └── index.js
    │   ├── package.json
    │   └── README.md
    │
    └── README.md


## Tech Stack

**Frontend:** React, ChakraUI

**Server:** Python, Flask, OpenCV, Machine Learning, Image Processing


## Backend
    The backend is developed using Flask and uses the following dependencies:

- Flask
- Flask-CORS
- numpy
- opencv-python
- Pillow

## Installation

You can install the required packages by running the following command:

```bash
  pip install -r requirements.txt
```

The app.py file contains the Flask app, implementing the /api/process_image endpoint for processing the uploaded image. The dominant colors are extracted using the k-means clustering algorithm, and the image is segmented using the binary mask technique.


## API Reference

#### Get all items

```http
  POST api/process_image
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `image` | `file` |  Image For segmentation |




## Frontend
    The frontend is built using React and Chakra UI. To set up the frontend, navigate to the frontend directory and run the following commands:


Install the frontend dependencies:

```bash
  cd frontend
  npm install
```
Start the frontend development server:
```bash
  npm start
```

The application will be accessible at http://localhost:3000.

The imageProcessor.js component handles the image upload, sending a request to the backend, displaying the segmented image, and providing an option to download the result.



## Usage

    1. Clone the repository.
    2. Set up the backend:
    - Navigate to the backend directory.
    - Run pip install -r requirements.txt to install the required packages.
    - Run python app.py to start the Flask server.
    3. Set up the frontend:
    - Navigate to the frontend directory.
    - Run npm install to install the required packages.
    - Run npm start to start the React development server.
    4. Open your browser and navigate to http://localhost:3000.
    5. Upload an image using the "Choose File" button.
    6. Wait for the application to process the image and display the segmented result.
    7. Click the "Download" button to save the segmented image.
## Features

    This web application for dominant color extraction and image segmentation offers a user-friendly interface and powerful image processing capabilities. Here are the key features:
    

- #### Image Upload:

    Users can easily upload images in various formats (e.g., JPEG, PNG) through a simple "Choose File" button.

- #### Dominant Color Extraction:

    The application extracts the dominant colors from the uploaded image using the k-means clustering algorithm. This process simplifies the color space of the image, making it easier to segment.

- #### Image Segmentation:

    After extracting the dominant colors, the application segments the image by creating a binary mask based on those colors. The result is a clear separation of the image's foreground from its background.

- #### Interactive Preview:
    Users can immediately see the segmented image in the browser, allowing them to evaluate the results and decide whether to download the output.

- #### Image Download
    The application provides a "Download" button for users to save the segmented image to their local device in PNG format.

- #### Responsive Design: 
    The user interface is built using Chakra UI, ensuring a clean and responsive design that works well on various devices and screen sizes.

- #### Cross-platform Compatibility:
    The application is compatible with different platforms, as it is built using popular web technologies like React and Flask. Users can access it through modern web browsers without needing to install additional software.

- #### Scalability:
    The modular architecture of the project makes it easy to add new features or modify existing ones. The separation between the frontend and backend allows for independent development and scalability.


- #### Security:
    The application uses the Flask-CORS library to handle cross-origin resource sharing, ensuring that only approved domains can access the backend API.


- #### Ease of Deployment: 
    The project can be easily deployed on various hosting platforms, thanks to its frontend and backend separation and its use of popular web technologies.

## Screenshots

![App Screenshot](https://i.postimg.cc/tgxYDS97/React-App-Brave-21-04-2023-10-20-14.png)


![App Screenshot](https://i.postimg.cc/Pf4N68nb/React-App-Brave-21-04-2023-10-21-04.png)

![App Screenshot](https://i.postimg.cc/NM8LvK9c/React-App-Brave-21-04-2023-10-20-53.png)



![App Screenshot](https://i.postimg.cc/C5m1d9sr/React-App-Brave-21-04-2023-10-21-21.png)


![App Screenshot](https://i.postimg.cc/GtctLbGs/React-App-Brave-21-04-2023-10-21-27.png)

![App Screenshot](https://i.postimg.cc/xCVqZvd5/React-App-Brave-21-04-2023-10-21-37.png)



## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/Priyanshu9898/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/priyanshumalaviya/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/Priyanshu2281)
[![Medium](https://img.shields.io/badge/medum-1DA1F2?style=for-the-badge&logo=medium&logoColor=black)](https://medium.com/@priyanshumalaviya9210)
## Demo

Insert gif or link to demo


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## License

[MIT](https://choosealicense.com/licenses/mit/)


import { Button, Box, Heading, VStack, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { processImageApi } from "../utils/ApiRequest";
import Spinner from "./Spinner";
import { saveAs } from "file-saver";

const ImageProcessor = () => {
  const [image, setImage] = useState(null);
  const [segmentedImage, setSegmentedImage] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);


    if(segmentedImage){
      setSegmentedImage(null);
    }
  };

  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      setLoading(true);

      formData.append("image", image);
      const response = await axios.post(processImageApi, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSegmentedImage(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDownloadClick = () => {
    const byteArray = atob(segmentedImage);
    const binaryData = new Uint8Array(byteArray.length);
    for (let i = 0; i < byteArray.length; i++) {
      binaryData[i] = byteArray.charCodeAt(i);
    }
    const blob = new Blob([binaryData], { type: "image/png" });
    saveAs(blob, "segmented_image.png");
  };

  return (
    <>
      <VStack
        className="container"
        style={{ zIndex: 2 }}
        alignItems={"center"}
        justifyContent={"center"}
        px={["10px", "20px"]}
        marginTop={"80px"}
      >
        <Heading style={{ textAlign: "center" }} color={"whiteAlpha.900"}>
          Dominant Color Extraction with Image Segmentation
        </Heading>
        <Box
          display="flex"
          borderRadius="md"
          className="ImageProcessor"
          padding="30px"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Button
            as="label"
            htmlFor="image-upload"
            bg="red"
            borderRadius="md"
            border="none"
            width={["80vw", "500px"]}
            transition="all 0.2s"
            _hover={{
              bg: "red.600",
              color: "whiteAlpha.800",
              cursor: "pointer",
            }}
            // padding={"20px"}
            color={"whiteAlpha.800"}
          >
            Select Image
          </Button>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </Box>
        <Button
          color="whiteAlpha.800"
          variant="link"
          onClick={handleImageUpload}
        >
          Process Image
        </Button>

        {image && (
          <>
            <Heading
              style={{ textAlign: "center", margin: "20px 0px" }}
              color={"whiteAlpha.900"}
            >
              Uploaded Image
            </Heading>
            <Image
              src={URL.createObjectURL(image)}
              alt="Image"
              width={["", "container.lg"]}
              marginBottom={["10px", "20px"]}
            />
          </>
        )}

        {loading ? (
          <>
            <Spinner />
          </>
        ) : (
          <>
            {segmentedImage && (
              <>
                <Heading
                  style={{ textAlign: "center", margin: "20px 0px" }}
                  color={"whiteAlpha.900"}
                >
                  Segmented Image
                </Heading>
                <Image
                  src={`data:image/png;base64,${segmentedImage}`}
                  alt="Segmented Image"
                  width={["", "container.lg"]}
          
                />
                <Button
                  htmlFor="image-download"
                  bg="red"
                  borderRadius="md"
                  border="none"
                  width={["80vw", "500px"]}
                  transition="all 0.2s"
                  _hover={{
                    bg: "red.600",
                    color: "whiteAlpha.800",
                    cursor: "pointer",
                  }}
                  // padding={"20px"}
                  style={{ marginTop: "20px", marginBottom: "50px" }}
                  color={"whiteAlpha.800"}
                  onClick={handleDownloadClick}
                >
                  Download Image
                </Button>
              </>
            )}
          </>
        )}
      </VStack>
    </>
  );
};

export default ImageProcessor;

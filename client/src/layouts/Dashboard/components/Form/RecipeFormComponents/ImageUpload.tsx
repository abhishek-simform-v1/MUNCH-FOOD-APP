import { useState } from "react";
import upload from "./../../../../../assets/Image upload.gif";
import style from "./../../ImageStyle.module.css";
import { Form } from "antd";
import { imageStore } from "../../../../../database/firebase-config";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { v4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
const ImageUpload = ({
  setImages,
  images,
  form,
  current_img,
  setImageUrl,
  imageUrl,
}: any) => {
  function convertToBase64(file: File) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }
  const onUpload = async (e: any) => {
    const file = e.target.files[0];
    const allowedFileTypes = ["image/jpeg", "image/png", "image/jpg"];
    const allowedFileSize = 3 * 1024 * 1024; // 3MB
    if (
      file &&
      allowedFileTypes.includes(file.type) &&
      file.size <= allowedFileSize
    ) {
      const base64: any = await convertToBase64(e.target.files[0]);
      setImages(base64);
      const imageRef = ref(imageStore, `images/recipeImage${v4()}}`);
      const uploadImage = () =>
        uploadString(imageRef, base64, "data_url")
          .then(() =>
            getDownloadURL(imageRef).then((downloadURL) => {
              setImageUrl(downloadURL);
              form.setFields([
                {
                  name: "recipe_image",
                  value: downloadURL,
                  errors: [""],
                },
              ]);
            })
          )
          .catch((error) => console.log(error));
      toast.promise(
        uploadImage,
        {
          pending: "image is uploading",
          success: "image Uploaded resolved 👌",
          error: "can not upload image 🤯",
        },
        {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    } else {
      toast.error(
        "Invalid file. Please select a JPG, PNG, or JPEG file up to 3MB.",
        {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  };
  console.log(current_img);
  console.log(imageUrl);
  return (
    <div className={style.form_header_Img}>
      <Form.Item
        name="recipe_image"
        label="Recipe Image"
        validateTrigger={["onChange", "onBlur"]}
        rules={[{ required: true, message: "Missing recipe image" }]}
      >
        <div className={style.image_container}>
          <img
            src={imageUrl ? imageUrl : current_img ? current_img : upload}
            alt=""
            className={style.recipe_uploaded_image}
          />
          <input
            onChange={onUpload}
            type="file"
            name="file"
            id="file"
            className={style.inputfile}
          />
          <label htmlFor="file">
            {images!?.length > 0 ? "Update Image" : "Upload Image"}
          </label>
        </div>
      </Form.Item>
    </div>
  );
};

export default ImageUpload;

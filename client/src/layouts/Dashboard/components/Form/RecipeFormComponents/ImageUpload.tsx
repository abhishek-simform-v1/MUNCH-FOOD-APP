import { useState } from "react";
import upload from "./../../../../../assets/Image upload.gif";
import style from "./../../ImageStyle.module.css";
import { Form } from "antd";
import { imageStore } from "../../../../../database/firebase-config";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { v4 } from "uuid";
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
    const base64: any = await convertToBase64(e.target.files[0]);
    const imageRef = ref(imageStore, `images/recipeImage${v4()}}`);

    uploadString(imageRef, base64, "data_url")
      .then(() =>
        getDownloadURL(imageRef).then((downloadURL) => {
          setImageUrl(downloadURL);
          setImages(downloadURL);
          form.setFields([
            {
              name: "recipe_image",
              value: downloadURL,
              errors: [""],
            },
          ]);
        })
      )
      .catch(() => console.log("first"));
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

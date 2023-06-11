import FormItem from 'antd/es/form/FormItem';
import { useState } from 'react';
import ReactImageUploading from 'react-images-uploading';
import style from './../../ImageStyle.module.css';
const ImageUpload = ({ setImages, images }: any) => {
  //   const [images, setImages] = useState([]);
  const maxNumber = 69;
  const onChange = (imageList: any) => {
    // data for submit
    setImages(imageList);
  };
  return (
    <div className={style.form_header_Img}>
      <FormItem
        name="recipe_image"
        label="Recipe Image"
        validateTrigger={['onChange', 'onBlur']}
        rules={[{ required: true, message: 'Missing Image' }]}
      >
        <ReactImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className={style.upload__image_wrapper}>
              {imageList.map((image, index) => (
                <div className={style.upload__items} key={index}>
                  <img
                    className={style.recipe_uploaded_image}
                    src={image['data_url']}
                    alt=""
                    width="100%"
                  />
                  <div className={style.image_item__btn_wrapper}>
                    <button
                      className={style.image_item__btn_update}
                      onClick={() => onImageUpdate(index)}
                    >
                      Update Image
                    </button>
                    <button
                      className={style.image_item__btn_remove}
                      onClick={() => onImageRemove(index)}
                    >
                      Remove Image
                    </button>
                  </div>
                </div>
              ))}
              {imageList.length === 0 ? (
                <div>
                  <button
                    onClick={onImageUpload}
                    {...dragProps}
                    style={isDragging ? { color: 'red' } : undefined}
                    className={style.image_item__btn_upload}
                  >
                    Click or Drag image here
                  </button>
                </div>
              ) : (
                <></>
              )}
              <span className={style.spanItem}>
                500*500 recomended image size
              </span>
            </div>
          )}
        </ReactImageUploading>
      </FormItem>
    </div>
  );
};

export default ImageUpload;

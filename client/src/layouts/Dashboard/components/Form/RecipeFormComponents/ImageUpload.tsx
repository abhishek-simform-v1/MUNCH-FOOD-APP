import upload from './../../../../../assets/Image upload.gif';
import style from './../../ImageStyle.module.css';
import { Form } from 'antd';
const ImageUpload = ({ setImages, images, form, current_img }: any) => {
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
    form.setFields([
      {
        name: 'recipe_image',
        value: base64,
        errors: [''],
      },
    ]);
    // form.setFieldValue('recipe_image', base64);
    setImages(base64);
  };
  return (
    <div className={style.form_header_Img}>
      <Form.Item
        name="recipe_image"
        label="Recipe Image"
        validateTrigger={['onChange', 'onBlur']}
        rules={[{ required: true, message: 'Missing recipe image' }]}
      >
        <div className={style.image_container}>
          <img
            src={images ? images : current_img ? current_img : upload}
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
            {images!?.length > 0 ? 'Update Image' : 'Upload Image'}
          </label>
        </div>
      </Form.Item>
    </div>
  );
};

export default ImageUpload;

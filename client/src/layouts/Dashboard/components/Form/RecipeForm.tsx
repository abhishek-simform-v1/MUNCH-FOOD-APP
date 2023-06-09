import React, { useEffect, useRef } from "react";
import { ConfigProvider, Select, Space } from "antd";
import Button from "../../../../utils/buttons/Button";
import { MinusCircleOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import style from "./../style.module.css";
import ImageUploading from "react-images-uploading";
import FormItem from "antd/es/form/FormItem";
import ButtonOutLine from "../../../../utils/buttons/ButtonOutLine";
import Title from "../../../../utils/Typography/Title";
import SubTitle from "../../../../utils/Typography/SubTitle";

export default function RecipeForm() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList: any, addUpdateIndex: any) => {
    // data for submit
    setImages(imageList);
    console.log(imageList, addUpdateIndex);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  const onFinish = (values: any) => {
    console.log("Received values of form:", values);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "hsl(186.38297872340422, 21.86046511627907%, 66%)",
          fontFamily: "f_regular",
        },
      }}
    >
      <div className={style.form_container}>
        <Form
          name="dynamic_form_nest_item"
          layout="vertical"
          onFinish={onFinish}
          className={style.form_style}
          size={"large"}
          autoComplete="off"
        >
          <div className={style.form_header}>
            <div className={style.form_header_Img}>
              <FormItem
                name="recipe_image"
                label="Recipe Image"
                rules={[{ required: true, message: "Missing Image" }]}
              >
                <ImageUploading
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
                            src={image["data_url"]}
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
                          <SubTitle>Upload</SubTitle>
                          <br />
                          <button
                            onClick={onImageUpload}
                            {...dragProps}
                            style={isDragging ? { color: "red" } : undefined}
                            className={style.image_item__btn_upload}
                          >
                            Click or Drag image here
                          </button>
                        </div>
                      ) : (
                        <></>
                      )}
                      <br />
                      <span className={style.spanItem}>
                        500*500 recomended image size
                      </span>
                    </div>
                  )}
                </ImageUploading>
              </FormItem>
            </div>
            <div className={style.form_header_content}>
              <Form.Item
                name="recipe_name"
                label="Recipe Name"
                rules={[{ required: true, message: "Missing recipe name" }]}
              >
                <Input placeholder="Recipe Name" />
              </Form.Item>

              <Form.Item
                name="category"
                label="category"
                rules={[{ required: true, message: "Missing category" }]}
              >
                <Input placeholder="category" />
              </Form.Item>

              <Form.Item name="cooking_time">
                <div className={style.d_flex}>
                  <Form.Item
                    label="Preperation Time"
                    name="preperation_time"
                    rules={[
                      {
                        required: true,
                        message: "Missing Preperation Time",
                      },
                    ]}
                  >
                    <Input placeholder="0" />
                  </Form.Item>
                  <Form.Item
                    label="Chill Time"
                    name="chill_time"
                    rules={[{ required: true, message: "Missing Chill Time" }]}
                  >
                    <Input placeholder="0" />
                  </Form.Item>
                  <Form.Item
                    label="Cook Time"
                    name="cook_time"
                    rules={[{ required: true, message: "Missing Cook Time" }]}
                  >
                    <Input placeholder="0" />
                  </Form.Item>
                </div>
              </Form.Item>

              <Form.Item
                name="recipe_name"
                label="Recipe Name"
                rules={[{ required: true, message: "Missing recipe name" }]}
              >
                <Input placeholder="Recipe Name" />
              </Form.Item>
              <Form.Item
                name="category"
                label="category"
                rules={[{ required: true, message: "Missing category" }]}
              >
                <Input placeholder="category" />
              </Form.Item>
            </div>
          </div>
          <div className={style.form_footer}>
            <Form.Item
              name="category"
              label="category"
              rules={[{ required: true, message: "Missing category" }]}
            >
              <Input placeholder="category" />
            </Form.Item>

            <Form.Item name="cooking_time">
              <div className={style.d_flex}>
                <Form.Item
                  label="Preperation Time"
                  name="preperation_time"
                  rules={[
                    {
                      required: true,
                      message: "Missing Preperation Time",
                    },
                  ]}
                >
                  <Input placeholder="0" />
                </Form.Item>
                <Form.Item
                  label="Chill Time"
                  name="chill_time"
                  rules={[{ required: true, message: "Missing Chill Time" }]}
                >
                  <Input placeholder="0" />
                </Form.Item>
                <Form.Item
                  label="Cook Time"
                  name="cook_time"
                  rules={[{ required: true, message: "Missing Cook Time" }]}
                >
                  <Input placeholder="0" />
                </Form.Item>
              </div>
            </Form.Item>

            <Form.List name="Ingrediant_info">
              {(fields, { add, remove }) => (
                <>
                  <div className={style.Ingrediant_info}>
                    {fields.map(({ key, name, ...restField }) => (
                      <div key={key} className={style.ingrediant_info_list}>
                        <div className={style.ingrediant_info_list_content}>
                          <div className={style.select_items}>
                            <Form.Item
                              {...restField}
                              label="Ingrediant Name"
                              name={[name, "Ingrediant_name"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Missing Ingrediant Name",
                                },
                              ]}
                            >
                              <Input placeholder="Ingrediant Name" />
                            </Form.Item>
                            <Form.Item
                              {...restField}
                              label="Ingrediant Operation"
                              name={[name, "Operation_Operation"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Missing Operation",
                                },
                              ]}
                            >
                              <Input placeholder="Slice" />
                            </Form.Item>
                          </div>
                          <div className={style.select_items}>
                            <Form.Item
                              {...restField}
                              label="Ingrediant Amount"
                              name={[name, "Ingrediant_amount"]}
                              style={{ width: "100%" }}
                              rules={[
                                {
                                  required: true,
                                  message: "Missing ingrediant ammount",
                                },
                              ]}
                            >
                              <Input placeholder="Ingrediant ammount" />
                            </Form.Item>
                            <Form.Item
                              label="Ingrediant Unit"
                              name={[name, "Ingrediant_unit"]}
                              style={{ width: "50%" }}
                              rules={[
                                {
                                  required: true,
                                  message: "Please Select Unit",
                                },
                              ]}
                            >
                              <Select
                                defaultValue="Enter Unit"
                                onChange={handleChange}
                                allowClear
                                style={{ width: "100%" }}
                                options={[
                                  { value: "Qty", label: "Qty" },
                                  { value: "Wgt", label: "Wgt" },
                                ]}
                              />
                            </Form.Item>
                          </div>
                        </div>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </div>
                    ))}
                  </div>
                  <Form.Item
                    rules={[{ required: true, message: "Please Select Unit" }]}
                  >
                    <ButtonOutLine onClick={() => add()}>
                      Add Ingridiants
                    </ButtonOutLine>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </div>

          <Button>Submit</Button>
        </Form>
      </div>
    </ConfigProvider>
  );
}

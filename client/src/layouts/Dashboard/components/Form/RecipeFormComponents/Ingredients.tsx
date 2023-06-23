import { Form, Input, InputNumber, Select } from "antd";
import style from "./../../style.module.css";
import { MinusCircleOutlined } from "@ant-design/icons";
import ButtonOutLine from "../../../../../utils/buttons/ButtonOutLine";

const Ingredients = () => {
  return (
    <Form.List name="ingredient_info">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <div key={key} className={style.ingredient_info_list}>
              <div className={style.select_list_content}>
                <div className={style.select_items}>
                  <Form.Item
                    {...restField}
                    label="ingredient Name"
                    style={{ width: "100%" }}
                    name={[name, "ingredient_name"]}
                    validateTrigger={["onChange", "onBlur"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing ingredient Name",
                      },
                    ]}
                  >
                    <Input placeholder="ingredient Name" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    label="ingredient operation"
                    style={{ width: "100%" }}
                    validateTrigger={["onChange", "onBlur"]}
                    name={[name, "ingredient_operation"]}
                    rules={[
                      {
                        required: false,
                        message: "Missing Operation",
                      },
                    ]}
                  >
                    <Input placeholder="Slice" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    label="ingredient Amount"
                    validateTrigger={["onChange", "onBlur"]}
                    style={{ width: "100%" }}
                    name={[name, "ingredient_amount"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing ingredient amount",
                      },
                    ]}
                  >
                    <Input
                      placeholder="ingredient amount"
                      className={style.input_field}
                    />
                  </Form.Item>
                </div>
              </div>
              {fields.length > 1 ? (
                <MinusCircleOutlined
                  style={{
                    marginTop: "1.5rem",
                  }}
                  onClick={() => remove(name)}
                />
              ) : null}
            </div>
          ))}
          <Form.Item
            validateTrigger={["onChange", "onBlur"]}
            rules={[{ required: true, message: "Please Select Unit" }]}
          >
            <ButtonOutLine onClick={() => add()}>Add Ingridients</ButtonOutLine>
          </Form.Item>
        </>
      )}
    </Form.List>
  );
};

export default Ingredients;

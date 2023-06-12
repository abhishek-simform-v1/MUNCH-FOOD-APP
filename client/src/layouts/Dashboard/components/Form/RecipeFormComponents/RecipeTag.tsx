import { Form, Input } from "antd";
import style from "./../../style.module.css";

const RecipeCatagory = () => {
  return (
    <Form.Item
      name="recipe_tagline"
      label="Recipe Tagline"
      validateTrigger={["onChange", "onBlur"]}
      rules={[{ required: true, message: "Missing recipe tagline" }]}
    >
      <Input placeholder="Recipe Tagline" className={style.input_field} />
    </Form.Item>
  );
};

export default RecipeCatagory;

import { Form, Select } from "antd";

const RecipeCat = () => {
  return (
    <Form.Item
      name="category"
      label="category"
      validateTrigger={["onChange", "onBlur"]}
      rules={[{ required: true, message: "Missing category" }]}
    >
      <Select
        placeholder="Please select"
        options={[
          {
            label: "break-fast",
            value: "break-fast",
          },
          {
            label: "lunch",
            value: "lunch",
          },
          {
            label: "snack",
            value: "snack",
          },
          {
            label: "soup",
            value: "soup",
          },
          {
            label: "dinner",
            value: "dinner",
          },
        ]}
      />
    </Form.Item>
  );
};

export default RecipeCat;

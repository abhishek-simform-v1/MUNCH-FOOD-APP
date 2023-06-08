import { CascaderProps, Space } from "antd";
import { Form, Input, Select } from "antd";
import React from "react";
import Button from "../../../../utils/buttons/Button";
import style from "./../style.module.css";
import { useState, useRef } from "react";
import { MinusCircleOutlined } from "@ant-design/icons";
import type { InputRef } from "antd";
type IngredientsUnit = "Qty" | "Wgt";

const { Option } = Select;
interface IngrediantsInfo {
  ingredientsAmount?: number;
  ingredientsUnit?: IngredientsUnit;
}
const RecipeForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form:", values);
  };
  let index = 0;

  const [items, setItems] = useState(["jack", "lucy"]);
  const [name, setName] = useState("");
  const inputRef = useRef<InputRef>(null);
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const addItem = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    e.preventDefault();
    setItems([...items, name || `New item ${index++}`]);
    setName("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };
  const checkIngredientInfo = (
    _: any,
    value: { ingredientsAmount: number }
  ) => {
    if (value.ingredientsAmount > 0) {
      return Promise.resolve();
    }
    return Promise.reject(
      new Error("IngredientAmount must be greater than zero!")
    );
  };
  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      layout={"vertical"}
      scrollToFirstError
      className={style.form}
      size={"large"}
    >
      <Form.Item
        name="recipeName"
        label="Recipe Name"
        rules={[
          {
            required: true,
            message: "Please input Name of Recipe",
          },
        ]}
      >
        <Input className={style.inputField} />
      </Form.Item>

      <Form.List name="ingredients">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} className={style.ingFlex} align="baseline">
                <Form.Item
                  name="IngredientInfo"
                  label="Ingredient Amount"
                  rules={[{ validator: checkIngredientInfo }]}
                >
                  <IngredientsAmount field={restField} />
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()}>
                Add Ingredients
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Button type={"submit"}>Register</Button>
    </Form>
  );
};

export default RecipeForm;
interface IngredientsAmountProps {
  value?: IngrediantsInfo;
  onChange?: (value: IngrediantsInfo) => void;
  field: {};
}
const IngredientsAmount: React.FC<IngredientsAmountProps> = ({
  value = {},
  onChange,
  field,
}) => {
  const [ingredientsAmount, setIngredientsAmount] = useState(0);
  const [ingredientsUnit, setIngredientsUnit] =
    useState<IngredientsUnit>("Qty");

  const triggerChange = (changedValue: {
    ingredientsAmount?: number;
    ingredientsUnit?: IngredientsUnit;
  }) => {
    onChange?.({
      ingredientsAmount,
      ingredientsUnit,
      ...value,
      ...changedValue,
    });
  };

  const onIngredientsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumber = parseInt(e.target.value || "0", 10);
    if (Number.isNaN(ingredientsAmount)) {
      return;
    }
    if (!("number" in value)) {
      setIngredientsAmount(newNumber);
    }
    triggerChange({ ingredientsAmount: newNumber });
  };

  const onIngredientsUnitChange = (newIngredientsUnit: IngredientsUnit) => {
    if (!("IngredientsUnit" in value)) {
      setIngredientsUnit(newIngredientsUnit);
    }
    triggerChange({ ingredientsUnit: newIngredientsUnit });
  };

  return (
    <span className={style.d_flex}>
      <Form.Item
        {...field}
        label="Ingredient Name"
        name={[name, "ingredient"]}
        rules={[{ required: true, message: "Missing ingredient name" }]}
      >
        <Input placeholder="ingredient Name" />
      </Form.Item>
      <Form.Item
        {...field}
        label="Operation"
        name={[name, "operation"]}
        rules={[{ required: true, message: "Missing operation " }]}
      >
        <Input placeholder="ingredient Name" />
      </Form.Item>
      <Input
        type="text"
        value={value.ingredientsAmount || ingredientsAmount}
        onChange={onIngredientsChange}
        style={{ width: 100 }}
      />
      <Select
        value={value.ingredientsUnit || ingredientsUnit}
        style={{ width: 80, margin: "0 8px" }}
        onChange={onIngredientsUnitChange}
      >
        <Option value="Qty">Qty</Option>
        <Option value="Wgt">Wgt</Option>
      </Select>
    </span>
  );
};

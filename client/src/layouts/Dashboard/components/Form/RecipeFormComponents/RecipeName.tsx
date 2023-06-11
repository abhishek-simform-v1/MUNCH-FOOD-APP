import { Form, Input } from 'antd';
import React from 'react';
import style from './../../style.module.css';

const RecipeName = () => {
  return (
    <Form.Item
      name="recipe_name"
      label="Recipe Name"
      validateTrigger={['onChange', 'onBlur']}
      rules={[{ required: true, message: 'Missing recipe name' }]}
    >
      <Input placeholder="Recipe Name" className={style.input_field} />
    </Form.Item>
  );
};

export default RecipeName;

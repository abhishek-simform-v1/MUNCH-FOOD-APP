import { Form, InputNumber } from 'antd';
import style from './../../style.module.css';

const PrepTime = () => {
  return (
    <div className={style.display_flex}>
      <Form.Item
        validateTrigger={['onChange', 'onBlur']}
        label="Preperation Time"
        name={['cooking_time', 'preperation_time']}
        rules={[
          {
            required: true,
            message: 'Missing Preperation Time',
          },
        ]}
      >
        <InputNumber placeholder="0" className={style.input_field} />
      </Form.Item>
      <Form.Item
        label="Chill Time"
        name={['cooking_time', 'chill_time']}
        validateTrigger={['onChange', 'onBlur']}
        rules={[{ required: true, message: 'Missing Chill Time' }]}
      >
        <InputNumber placeholder="0" className={style.input_field} />
      </Form.Item>
      <Form.Item
        label="Cook Time"
        name={['cooking_time', 'cook_time']}
        validateTrigger={['onChange', 'onBlur']}
        rules={[{ required: true, message: 'Missing Cook Time' }]}
      >
        <InputNumber placeholder="0" className={style.input_field} />
      </Form.Item>
    </div>
  );
};

export default PrepTime;

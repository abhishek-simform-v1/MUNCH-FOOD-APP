import { Form, Input } from 'antd';
import style from './../../style.module.css';

const Nutritions = () => {
  return (
    <div className={style.select_list_content}>
      <div className={style.select_items}>
        <Form.Item
          label="calories"
          name={['nutritions', 'calories']}
          validateTrigger={['onChange', 'onBlur']}
          rules={[
            {
              required: true,
              message: 'Missing calories',
            },
          ]}
        >
          <Input placeholder="1200" className={style.input_field} />
        </Form.Item>
        <Form.Item
          label="fiber"
          name={['nutritions', 'fiber']}
          validateTrigger={['onChange', 'onBlur']}
          rules={[{ required: true, message: 'Missing fiber' }]}
        >
          <Input placeholder="110" className={style.input_field} />
        </Form.Item>
        <Form.Item
          label="protein"
          name={['nutritions', 'protein']}
          validateTrigger={['onChange', 'onBlur']}
          rules={[{ required: true, message: 'Missing protein' }]}
        >
          <Input placeholder="156" className={style.input_field} />
        </Form.Item>
      </div>
      <div className={style.select_items}>
        <Form.Item
          label="carbs"
          validateTrigger={['onChange', 'onBlur']}
          name={['nutritions', 'carbs']}
          rules={[{ required: true, message: 'Missing carbs' }]}
        >
          <Input placeholder="196" className={style.input_field} />
        </Form.Item>
        <Form.Item
          label="fats %"
          name={['nutritions', 'fats']}
          validateTrigger={['onChange', 'onBlur']}
          rules={[{ required: true, message: 'Missing fats' }]}
        >
          <Input placeholder="56" className={style.input_field} />
        </Form.Item>
        <Form.Item
          label="sugar"
          name={['nutritions', 'sugar']}
          validateTrigger={['onChange', 'onBlur']}
          rules={[{ required: true, message: 'Missing sugar' }]}
        >
          <Input placeholder="156" className={style.input_field} />
        </Form.Item>
      </div>
    </div>
  );
};

export default Nutritions;

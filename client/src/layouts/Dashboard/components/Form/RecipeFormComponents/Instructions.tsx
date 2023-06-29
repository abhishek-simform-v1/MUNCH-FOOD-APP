import { Form, Input } from 'antd';
import style from './../../style.module.css';
import { MinusCircleOutlined } from '@ant-design/icons';
import ButtonOutLine from '../../../../../utils/buttons/ButtonOutLine';

const Instructions = () => {
  return (
    <Form.List name="instructions">
      {(fields, { add, remove }) => (
        <>
          <div>
            {fields.map((field, index) => (
              <Form.Item
                label={index === 0 ? 'Instructions ' : ''}
                required={false}
                key={field.key}
              >
                <div className={style.select_items}>
                  <div className={style.select_items}>
                    <div className={style.instruction_num_container}>
                      <h1 className={style.instruction_num}>{index + 1}</h1>
                    </div>
                    <Form.Item
                      {...field}
                      validateTrigger={['onChange', 'onBlur']}
                      className={style.instructions_field}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message:
                            'Please input Instruction or delete this field.',
                        },
                      ]}
                    >
                      <Input
                        placeholder="Instruction "
                        style={{
                          width: '100%',
                          height: '60px',
                        }}
                      />
                    </Form.Item>
                  </div>
                  {fields.length > 1 ? (
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      onClick={() => remove(field.name)}
                    />
                  ) : null}
                </div>
              </Form.Item>
            ))}
          </div>
          <Form.Item
            validateTrigger={['onChange', 'onBlur']}
            rules={[{ required: true, message: 'Please Select Unit' }]}
          >
            <ButtonOutLine onClick={() => add()}>Add Instruction</ButtonOutLine>
          </Form.Item>
        </>
      )}
    </Form.List>
  );
};

export default Instructions;

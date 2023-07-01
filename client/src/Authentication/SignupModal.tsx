import { Modal } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupModal = ({ open, setOpen }) => {
  const navigate = useNavigate();
  return (
    <Modal
      title="you have to sign In first"
      centered
      open={open}
      onOk={() => {
        return setOpen(false), navigate('/signup', { replace: true });
      }}
      onCancel={() => {
        return setOpen(false);
      }}
      width={500}
    ></Modal>
  );
};

export default SignupModal;

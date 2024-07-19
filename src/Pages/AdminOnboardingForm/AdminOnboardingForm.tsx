import React from 'react';
import { Form, Input, Button } from 'antd';
import './AdminOnboardingForm.css';
import styled from 'styled-components';

const AdminOnboardingFormWrapper = styled('div')`
    max-width: 500px;
    margin: auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  `
  

const AdminOnboardingForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <AdminOnboardingFormWrapper className="admin-onboarding-form-wrapper">
      <Form
        layout="vertical"
        name="adminOnboarding"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Admin Name"
          name="adminName"
          rules={[{ required: true, message: 'Please input the admin name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Admin Email"
          name="adminEmail"
          rules={[{ required: true, message: 'Please input the admin email!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Onboard Admin
          </Button>
        </Form.Item>
      </Form>
    </AdminOnboardingFormWrapper>
  );
};

export default AdminOnboardingForm;

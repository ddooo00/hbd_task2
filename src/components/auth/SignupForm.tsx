import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components';

const FormWrapper = styled(Form)`
  width: 300px;
`;

const SignupForm: React.FC = () => {
  const handleSignup = (values: any) => {
    // 회원가입 로직을 여기에 구현
  };

  return (
    <FormWrapper onFinish={handleSignup}>
      <Form.Item
        label="이메일"
        name="email"
        rules={[{ required: true, message: '이메일을 입력해주세요.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="비밀번호"
        name="password"
        rules={[{ required: true, message: '비밀번호를 입력해주세요.' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="비밀번호 확인"
        name="confirmPassword"
        rules={[
          { required: true, message: '비밀번호 확인을 입력해주세요.' },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="agreed"
        valuePropName="checked"
        rules={[{ validator: (_, value) => (value ? Promise.resolve() : Promise.reject(new Error('고객정보 이용동의에 체크해주세요.'))) }]}
      >
        <Checkbox>고객정보 이용동의</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          회원가입
        </Button>
      </Form.Item>
    </FormWrapper>
  );
};

export default SignupForm;

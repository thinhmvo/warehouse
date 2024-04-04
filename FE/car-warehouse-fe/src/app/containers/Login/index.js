import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { LayoutLogin } from "./styled";
import { uesLogin } from "./hooks/useLogin";

const Login = () => {
  const { handleLogin } = uesLogin();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    handleLogin(values.username, values.password);
  };
  return (
    <LayoutLogin>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>{" "}
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </LayoutLogin>
  );
};

export default Login;

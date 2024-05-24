import { FC, useState } from "react";
import { useAuth } from "../../../contexts/auth/AuthContext";
import { signIn } from "../../../contexts/auth/reducers";
import { Button, Flex, Form, Input } from "antd";
import { authService } from "../../../service/authService";
import { userService } from "../../../service/userService";

const SignIn: FC = () => {
  const { dispatch } = useAuth();
  const [loadingSubmit, setLoadingSubmit] = useState(false)

  const handleSubmit = async (values: any) => {
    setLoadingSubmit(true)
    try {
      await authService.signIn(values)
      const user = await userService.getProfile();
      dispatch(signIn({ user }))
      setLoadingSubmit(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div>Sign In</div>
      <Form
        onFinish={handleSubmit}
        autoComplete="off"
        layout="vertical"
        className="w-[300px]"
      >
        <Form.Item
          label={<div className="style-regular-14 text-gray">Email</div>}
          name="email"
          rules={[
            {
              required: true,
              message: <div className="style-light-14">Vui lòng nhập email!</div>,
            },
            {
              type: "email",
              message: <div className="style-light-14">Email không hợp lệ!</div>,
            },
          ]}
        >
          <Input size="large" placeholder="Email" className="rounded-[20px] px-[17px] style-light-14 text-gray" />
        </Form.Item>
        <Form.Item
          label={
            <Flex justify="space-between" align="center" className="w-full">
              <div className="style-regular-14 text-gray">Mật khẩu</div>
              {/* <Link href={"/forgot-password"} tabIndex={-1}>
                <div className="style-regular-14">Quên mật khẩu?</div>
              </Link> */}
            </Flex>
          }
          name="password"
          rules={[
            {
              required: true,
              message: <div className="style-light-14">Vui lòng nhập mật khẩu!</div>,
            },
          ]}
          className="[&_label]:w-full"
        >
          <Input.Password size="large" placeholder="Mật khẩu" className="rounded-[20px] px-[17px] style-light-14 text-gray" />
        </Form.Item>
        <Button
          size="large"
          htmlType="submit"
          loading={loadingSubmit}
          className="w-full bg-icon p-[10px] rounded-[20px] flex justify-center items-center style-regular-14 text-[white]"
        >
          Đăng nhập
        </Button>
      </Form>
    </>
  );
};

export default SignIn
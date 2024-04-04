import dynamic from "next/dynamic";

const LoginContainer = dynamic(() => import("../../app/containers/Login"), {
  ssr: false,
});
const LoginPage = () => <LoginContainer />;
export default LoginPage;

import dynamic from "next/dynamic";

const RegisterContainer = dynamic(
  () => import("../../app/containers/Register"),
  {
    ssr: false,
  }
);
const RegisterPage = () => <RegisterContainer />;
export default RegisterPage;

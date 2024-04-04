import dynamic from "next/dynamic";

const HomeContainer = dynamic(() => import("../../app/containers/Home"), {
  ssr: false,
});
const HomePage = () => <HomeContainer />;
export default HomePage;

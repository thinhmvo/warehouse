import { Button } from "antd";
import Router from "next/router";
import { LayoutHome } from "./styled";

const Home = () => {
  return (
    <LayoutHome>
      <h2>Warehouse management</h2>
      <Button type="primary" onClick={() => Router.push("/warehouse-manager")}>
        Explore warehouse
      </Button>
    </LayoutHome>
  );
};

export default Home;

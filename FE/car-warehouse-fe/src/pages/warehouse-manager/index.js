import dynamic from "next/dynamic";

const WarehouseManagerContainer = dynamic(
  () => import("../../app/containers/WarehouseManager"),
  {
    ssr: false,
  }
);
const WarehouseManagerPage = () => <WarehouseManagerContainer />;
export default WarehouseManagerPage;

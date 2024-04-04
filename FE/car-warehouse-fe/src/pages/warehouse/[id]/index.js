import dynamic from "next/dynamic";

const WarehouseContainer = dynamic(
  () => import("../../../app/containers/Warehouse"),
  {
    ssr: false,
  }
);
const WarehousePage = () => <WarehouseContainer />;
export default WarehousePage;

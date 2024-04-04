/* eslint-disable react/jsx-key */
import { Button, Col, Result, Row, Spin } from "antd";
import Warehouse from "./Common/Warehouse";
import AddWarehouse from "./Common/AddWarehouse";
import EditWarehouse from "./Common/EditWarehouse";
import { uesHome } from "./hooks";
import { LayoutHome } from "./styled";
const Home = () => {
  const {
    isLoading,
    warehouses,
    isAddWarehouse,
    isEditWarehouse,
    infoUpdate,
    setIsEditWarehouse,
    setIsAddWarehouse,
    createWarehouse,
    deleteWarHouse,
    openEditWarehouse,
    updateWarehouse,
  } = uesHome();
  return (
    <Spin spinning={isLoading}>
      <LayoutHome>
        {isEditWarehouse && (
          <EditWarehouse
            info={infoUpdate}
            isOpen={isEditWarehouse}
            updateWarehouse={updateWarehouse}
            onCancel={() => setIsEditWarehouse(false)}
          />
        )}
        {isAddWarehouse && (
          <AddWarehouse
            isOpen={isAddWarehouse}
            createWarehouse={createWarehouse}
            onCancel={() => setIsAddWarehouse(false)}
          />
        )}
        <Button onClick={() => setIsAddWarehouse(true)} type="primary">
          Add Warehouses
        </Button>
        <Row style={{ width: "100%" }} gutter={[16, 16]}>
          {warehouses.length > 0 ? (
            <>
              {warehouses.map((item) => {
                return (
                  <Col span={6}>
                    <Warehouse
                      info={item}
                      deleteWarHouse={deleteWarHouse}
                      openEditWarehouse={openEditWarehouse}
                    />
                  </Col>
                );
              })}
            </>
          ) : (
            <Result
              status="403"
              title="No Warehouses "
              extra={
                <Button onClick={() => setIsAddWarehouse(true)} type="primary">
                  Add Warehouses
                </Button>
              }
            />
          )}
        </Row>
      </LayoutHome>
    </Spin>
  );
};

export default Home;

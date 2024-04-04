/* eslint-disable react/jsx-key */
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Col, Result, Row, Spin } from "antd";
import AddCar from "./Common/AddCar";
import Car from "./Common/Car";
// import EditWarehouse from "./Common/EditWarehouse";
import { uesWarehouse } from "./hooks";
import { LayoutButton, LayoutWarehouse } from "./styled";
import Router from "next/router";

const Warehouse = () => {
  const {
    isLoading,
    cars,
    isAddCard,
    infoUpdate,
    isEditCar,
    setIsAddCar,
    createCar,
    setIsEditCar,
    deleteCar,
    updateCar,
    openEditCar,
  } = uesWarehouse();
  return (
    <Spin spinning={isLoading}>
      <LayoutWarehouse>
        {/* {isEditWarehouse && (
          <EditWarehouse
            info={infoUpdate}
            isOpen={isEditWarehouse}
            updateWarehouse={updateWarehouse}
            onCancel={() => setIsEditWarehouse(false)}
          />
        )}
       */}
        {isAddCard && (
          <AddCar
            isOpen={isAddCard}
            createCar={createCar}
            onCancel={() => setIsAddCar(false)}
          />
        )}
        {cars.length > 0 ? (
          <>
            <LayoutButton>
              <Button
                icon={<ArrowLeftOutlined />}
                onClick={() => Router.push("/home")}
                type="text"
              />
              <Button onClick={() => setIsAddCar(true)} type="primary">
                Add car
              </Button>
            </LayoutButton>
            <Row style={{ width: "100%" }} gutter={[16, 16]}>
              {cars.map((item) => {
                return (
                  <Col span={6}>
                    <Car
                      info={item}
                      deleteCar={deleteCar}
                      //   openEditWarehouse={openEditWarehouse}
                    />
                  </Col>
                );
              })}
            </Row>
          </>
        ) : (
          <Result
            status="403"
            title="No car in warehouse "
            extra={
              <Button onClick={() => setIsAddCar(true)} type="primary">
                Add Car
              </Button>
            }
          />
        )}
      </LayoutWarehouse>
    </Spin>
  );
};

export default Warehouse;

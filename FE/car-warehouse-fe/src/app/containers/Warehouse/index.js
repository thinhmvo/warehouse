/* eslint-disable react/jsx-key */
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Col, Result, Row, Spin } from "antd";
import AddCar from "./Common/AddCar";
import Car from "./Common/Car";
import EditCar from "./Common/EditCar";
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
        {isEditCar && (
          <EditCar
            info={infoUpdate}
            isOpen={isEditCar}
            updateCar={updateCar}
            onCancel={() => setIsEditCar(false)}
          />
        )}

        {isAddCard && (
          <AddCar
            isOpen={isAddCard}
            createCar={createCar}
            onCancel={() => setIsAddCar(false)}
          />
        )}
        <LayoutButton>
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => Router.push("/warehouse-manager")}
            type="text"
          />
          {cars.length > 0 && (
            <Button onClick={() => setIsAddCar(true)} type="primary">
              Add car
            </Button>
          )}
        </LayoutButton>
        {cars.length > 0 ? (
          <Row style={{ width: "100%" }} gutter={[16, 16]}>
            {cars.map((item, index) => {
              return (
                <Col span={6}>
                  <Car
                    key={index}
                    info={item}
                    deleteCar={deleteCar}
                    openEditCar={openEditCar}
                  />
                </Col>
              );
            })}
          </Row>
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

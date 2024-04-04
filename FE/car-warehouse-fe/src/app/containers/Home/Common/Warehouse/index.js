/* eslint-disable @next/next/no-img-element */
import {
  EditOutlined,
  ExclamationCircleFilled,
  RestOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Modal } from "antd";
import Router from "next/router";

const { Meta } = Card;

const Warehouse = ({ info = null, deleteWarHouse, openEditWarehouse }) => {
  const { confirm } = Modal;

  const showDeleteConfirm = () => {
    confirm({
      title: "Confirm delete",
      icon: <ExclamationCircleFilled />,
      content: "Are you sure delete",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteWarHouse(info.id);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  return (
    <Card
      style={{ width: 340 }}
      cover={
        <img
          onClick={() => Router.push(`/warehouse/${info.id}`)}
          alt="example"
          src="https://img.freepik.com/premium-photo/3d-flat-cute-chibi-icon-fleet-manager-monitoring-vehicle-tracking-system-digital-innovation_980716-100768.jpg"
        />
      }
      actions={[
        <EditOutlined key="edit" onClick={() => openEditWarehouse(info)} />,
        <RestOutlined key="delete" onClick={() => showDeleteConfirm()} />,
      ]}
    >
      <Meta
        avatar={
          <Avatar src="https://static.vecteezy.com/system/resources/previews/023/413/951/large_2x/cute-kawaii-car-chibi-mascot-cartoon-style-vector.jpg" />
        }
        title={info?.name}
        description={
          <div>
            <p>Capacity: {info.capacity}</p>
            <p>Available: {info.available}</p>
          </div>
        }
      />
    </Card>
  );
};

export default Warehouse;

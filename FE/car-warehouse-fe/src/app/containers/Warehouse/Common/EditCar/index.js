import { Button, Form, Input, Modal, Select } from "antd";
import { useEditCar } from "./hook";

const EditCar = ({ isOpen, onCancel, updateCar, info }) => {
  const onFinish = (values) => {
    updateCar(values);
    onCancel();
  };
  const { warehouses } = useEditCar();

  return (
    <Modal
      title="Edit Car"
      open={isOpen}
      onCancel={onCancel}
      centered
      footer={null}
    >
      <Form
        variant="filled"
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
        initialValues={info}
      >
        <Form.Item
          label="Car Vin"
          name="carVin"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input disabled />
        </Form.Item>
        <Form.Item
          name="warehouseId"
          label="WareHouse"
          rules={[
            {
              required: true,
              message: "Please select WareHouse!",
            },
          ]}
        >
          <Select>
            {warehouses?.map((item, index) => (
              <Select.Option key={index} value={item.id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Make"
          name="make"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Model"
          name="model"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Year"
          name="year"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Color"
          name="color"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 21,
            span: 24,
          }}
        >
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditCar;

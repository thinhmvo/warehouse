import { Button, Form, Input, InputNumber, Modal } from "antd";

const AddWarehouse = ({ isOpen, onCancel, createWarehouse }) => {
  const onFinish = (values) => {
    createWarehouse(values);
    onCancel();
  };
  return (
    <Modal
      title="Add Warehouse"
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
      >
        <Form.Item
          label="Name"
          name="name"
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
          label="Capacity"
          name="capacity"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <InputNumber
            style={{
              width: "100%",
            }}
          />
        </Form.Item>

        <Form.Item
          label="Available"
          name="available"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <InputNumber
            style={{
              width: "100%",
            }}
          />
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

export default AddWarehouse;

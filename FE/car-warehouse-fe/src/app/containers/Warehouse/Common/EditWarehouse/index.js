import { Button, Form, Input, InputNumber, Modal } from "antd";

const EditWarehouse = ({ isOpen, onCancel, updateWarehouse, info }) => {
  const onFinish = (values) => {
    updateWarehouse(values);
    onCancel();
  };
  return (
    <Modal
      title="Edit Warehouse"
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
            offset: 20,
            span: 24,
          }}
        >
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditWarehouse;

/* eslint-disable jsx-a11y/alt-text */
import { Button, Form, Input, Upload, Modal, Image } from "antd";
import { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

const AddCar = ({ isOpen, onCancel, createCar }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [fileImage, setFileImage] = useState(null);

  const onFinish = (values) => {
    createCar(values, fileImage);
    onCancel();
  };
  const handleChange = (info) => {
    if (info.file) {
      const imageUrl = URL.createObjectURL(info.file.originFileObj);
      setImageUrl(imageUrl);
      setFileImage(info.file);
    }
  };
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  return (
    <Modal
      title="Add Car"
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
          label="Car Vin"
          name="carVin"
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
        <Form.Item label="Image">
          {imageUrl ? (
            <Image preview={false} src={imageUrl} />
          ) : (
            <Upload
              name="avatar"
              listType="picture-circle"
              className="avatar-uploader"
              showUploadList={false}
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              onChange={handleChange}
            >
              {uploadButton}
            </Upload>
          )}
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

export default AddCar;

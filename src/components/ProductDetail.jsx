import { Card, Typography, Descriptions, Button, Space } from "antd";
import { ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";

const { Title } = Typography;

const ProductDetail = ({ product }) => {
  if (!product) return null;

  return (
    <div>
      <Card>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <div style={{ textAlign: "center" }}>
            <ShoppingCartOutlined style={{ fontSize: "64px" }} />
          </div>

          <Title level={2}>{product.name}</Title>

          <Descriptions bordered>
            <Descriptions.Item label="Price" span={3}>
              ${product.price}
            </Descriptions.Item>
            <Descriptions.Item label="Description" span={3}>
              {product.description}
            </Descriptions.Item>
            <Descriptions.Item label="Product ID" span={3}>
              {product.id}
            </Descriptions.Item>
          </Descriptions>

          <Space>
            <Button type="primary" icon={<ShoppingCartOutlined />} size="large">
              Add to Cart
            </Button>
            <Button icon={<HeartOutlined />} size="large">
              Add to Wishlist
            </Button>
          </Space>
        </Space>
      </Card>
    </div>
  );
};

export default ProductDetail;

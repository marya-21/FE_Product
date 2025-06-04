import { Card, Row, Col, Typography } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";

const { Title } = Typography;

// Mock data for products
const products = {
  1: [
    // Nike products
    {
      id: 1,
      name: "Air Max 270",
      price: 150,
      description: "Nike Air Max 270 - Comfortable daily sneakers",
    },
    {
      id: 2,
      name: "Air Force 1",
      price: 100,
      description: "Classic Nike Air Force 1 - Timeless design",
    },
    {
      id: 3,
      name: "Air Jordan 1",
      price: 170,
      description: "Iconic Air Jordan 1 - Basketball heritage",
    },
  ],
  2: [
    // Adidas products
    {
      id: 4,
      name: "Ultraboost 22",
      price: 180,
      description: "Adidas Ultraboost 22 - Premium running shoes",
    },
    {
      id: 5,
      name: "Stan Smith",
      price: 85,
      description: "Classic Adidas Stan Smith - Tennis-inspired design",
    },
    {
      id: 6,
      name: "NMD R1",
      price: 130,
      description: "Adidas NMD R1 - Modern street style",
    },
  ],
  3: [
    // Puma products
    {
      id: 7,
      name: "RS-X",
      price: 110,
      description: "Puma RS-X - Retro running style",
    },
    {
      id: 8,
      name: "Cali Sport",
      price: 90,
      description: "Puma Cali Sport - Tennis-inspired sneakers",
    },
    {
      id: 9,
      name: "Future Rider",
      price: 80,
      description: "Puma Future Rider - Vintage running design",
    },
  ],
  4: [
    // Under Armour products
    {
      id: 10,
      name: "HOVR Phantom",
      price: 140,
      description: "Under Armour HOVR Phantom - Running shoes",
    },
    {
      id: 11,
      name: "Project Rock",
      price: 120,
      description: "Under Armour Project Rock - Training shoes",
    },
    {
      id: 12,
      name: "Curry Flow",
      price: 160,
      description: "Under Armour Curry Flow - Basketball shoes",
    },
  ],
};

const Products = ({ brand, onProductSelect }) => {
  if (!brand) return null;

  const brandProducts = products[brand.id] || [];

  return (
    <div>
      <Title level={2}>{brand.name} Products</Title>
      <Row gutter={[16, 16]}>
        {brandProducts.map((product) => (
          <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
            <Card
              hoverable
              cover={
                <div style={{ padding: "20px", textAlign: "center" }}>
                  <ShoppingOutlined style={{ fontSize: "48px" }} />
                </div>
              }
              onClick={() => onProductSelect(product)}
            >
              <Card.Meta
                title={product.name}
                description={
                  <>
                    <p>{product.description}</p>
                    <p style={{ fontWeight: "bold" }}>${product.price}</p>
                  </>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;

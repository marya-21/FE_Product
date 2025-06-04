import { Card, Row, Col } from "antd";
import { ShopOutlined } from "@ant-design/icons";

// Mock data for brands
const brands = [
  {
    id: 1,
    name: "Nike",
    description: "Just Do It",
    logo: "https://example.com/nike.png",
  },
  {
    id: 2,
    name: "Adidas",
    description: "Impossible Is Nothing",
    logo: "https://example.com/adidas.png",
  },
  {
    id: 3,
    name: "Puma",
    description: "Forever Faster",
    logo: "https://example.com/puma.png",
  },
  {
    id: 4,
    name: "Under Armour",
    description: "The Only Way Is Through",
    logo: "https://example.com/ua.png",
  },
];

const Brands = ({ onBrandSelect }) => {
  return (
    <div>
      <h2>Brands</h2>
      <Row gutter={[16, 16]}>
        {brands.map((brand) => (
          <Col xs={24} sm={12} md={8} lg={6} key={brand.id}>
            <Card
              hoverable
              cover={
                <div style={{ padding: "20px", textAlign: "center" }}>
                  <ShopOutlined style={{ fontSize: "48px" }} />
                </div>
              }
              onClick={() => onBrandSelect(brand)}
            >
              <Card.Meta title={brand.name} description={brand.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Brands;

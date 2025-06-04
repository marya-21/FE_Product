import { useState } from "react";
import { Layout, Menu } from "antd";
import { ShopOutlined, AppstoreOutlined } from "@ant-design/icons";
import Brands from "./components/Brands";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";

const { Header, Content, Sider } = Layout;

function App() {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentView, setCurrentView] = useState("brands");

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
    setSelectedProduct(null);
    setCurrentView("products");
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setCurrentView("productDetail");
  };

  const renderContent = () => {
    switch (currentView) {
      case "brands":
        return <Brands onBrandSelect={handleBrandSelect} />;
      case "products":
        return (
          <Products
            brand={selectedBrand}
            onProductSelect={handleProductSelect}
          />
        );
      case "productDetail":
        return <ProductDetail product={selectedProduct} />;
      default:
        return <Brands onBrandSelect={handleBrandSelect} />;
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ padding: 0, background: "#fff" }}>
        <div
          style={{ padding: "0 24px", fontSize: "20px", fontWeight: "bold" }}
        >
          Brand & Product Catalog
        </div>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: "#fff" }}>
          <Menu
            mode="inline"
            selectedKeys={[currentView]}
            style={{ height: "100%", borderRight: 0 }}
            items={[
              {
                key: "brands",
                icon: <ShopOutlined />,
                label: "Brands",
                onClick: () => {
                  setCurrentView("brands");
                  setSelectedBrand(null);
                  setSelectedProduct(null);
                },
              },
              {
                key: "products",
                icon: <AppstoreOutlined />,
                label: "Products",
                disabled: !selectedBrand,
                onClick: () => {
                  setCurrentView("products");
                  setSelectedProduct(null);
                },
              },
            ]}
          />
        </Sider>
        <Layout style={{ padding: "24px" }}>
          <Content
            style={{
              background: "#fff",
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {renderContent()}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;

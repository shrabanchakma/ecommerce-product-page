import { createContext, useState } from "react";
import Navbar from "../../../Components/Shared/Navbar/Navbar";
import ProductInfoSection from "../ProductInfoSection/ProductInfoSection";
export const ProductContext = createContext(null);
const ProductPage = () => {
  const [productQuantity, setProductQuantity] = useState(0);
  return (
    <ProductContext.Provider value={{ productQuantity, setProductQuantity }}>
      <div className="max-w-screen-xl mx-auto h-[100vh] ">
        <Navbar />
        <ProductInfoSection />
      </div>
    </ProductContext.Provider>
  );
};

export default ProductPage;

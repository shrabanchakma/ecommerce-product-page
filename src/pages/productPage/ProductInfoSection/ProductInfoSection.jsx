import "swiper/css/bundle";
import ProductGallery from "./ProductGallary";
import ProductInfo from "./ProductInfo";
const ProductInfoSection = () => {
  return (
    <section className="flex items-center justify-center">
      <ProductGallery />
      <ProductInfo />
    </section>
  );
};

export default ProductInfoSection;

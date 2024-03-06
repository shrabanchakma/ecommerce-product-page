import "swiper/css/bundle";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-transitions.css";
import "lightgallery/css/lightgallery-bundle.css";
import ProductGallery from "./ProductGallary";
import ProductInfo from "./ProductInfo";
const ProductInfoSection = () => {
  return (
    <section className="flex items-center justify-center p-16 ">
      <ProductGallery />
      <ProductInfo />
    </section>
  );
};

export default ProductInfoSection;

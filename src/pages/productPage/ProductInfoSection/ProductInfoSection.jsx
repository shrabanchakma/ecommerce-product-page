import "swiper/css/bundle";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-transitions.css";
import "lightgallery/css/lightgallery-bundle.css";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
const ProductInfoSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:p-16  relative ">
      <ProductGallery />
      <ProductInfo />
    </section>
  );
};

export default ProductInfoSection;

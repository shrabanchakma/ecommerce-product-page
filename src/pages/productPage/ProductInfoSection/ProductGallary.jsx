import { Swiper, SwiperSlide } from "swiper/react";
import { productImages } from "../../../Components/Shared/Images/Images";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
const ProductGallery = () => {
  console.log(productImages);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const getProductImages = () => {
    return (
      <>
        {productImages.map((imageItem, idx) => (
          <SwiperSlide key={idx}>
            <img src={imageItem} alt={imageItem} />
          </SwiperSlide>
        ))}
      </>
    );
  };
  return (
    <div>
      <Swiper
        modules={[FreeMode, Navigation, Thumbs]}
        spaceBetween={10}
        navigation={true}
        loop={true}
        className="bg-blue-500"
        // thumbs={{swiper: thumbsSwiper}}
      >
        {getProductImages()}
      </Swiper>
    </div>
  );
};

export default ProductGallery;

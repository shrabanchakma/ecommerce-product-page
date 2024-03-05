import { Swiper, SwiperSlide } from "swiper/react";
import {
  productImages,
  productThumbnailImages,
} from "../../../Components/Shared/Images/Images";
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

  const getProductThumbnailImages = () => {
    return (
      <>
        {productThumbnailImages.map((imageItem, idx) => (
          <SwiperSlide key={idx}>
            <img src={imageItem} alt={imageItem} />
          </SwiperSlide>
        ))}
      </>
    );
  };

  return (
    <div className="w-1/2 bg-green-500">
      <Swiper
        modules={[FreeMode, Navigation, Thumbs]}
        spaceBetween={10}
        loop={true}
        className="bg-blue-500 rounded-2xl"
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
      >
        {getProductImages()}
      </Swiper>
      <Swiper
        modules={[FreeMode, Navigation, Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={0}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className="bg-green-500 w-1/2"
      >
        {getProductThumbnailImages()}
      </Swiper>
    </div>
  );
};

export default ProductGallery;

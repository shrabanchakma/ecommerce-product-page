import { useRef, useState } from "react";
import { Swiper } from "swiper/react";
import { Thumbs } from "swiper/modules";
import nextBtn from "../../../assets/images/icon-next.svg";
import prevBtn from "../../../assets/images/icon-previous.svg";
import closeBtn from "../../../assets/images/icon-close.svg";
const ProductModal = ({ getImages, getThumbnails, setModal }) => {
  const [modalThumbsSwiper, setModalThumbsSwiper] = useState(null);
  const swiperRef = useRef();
  return (
    <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]  hover:cursor-pointer transition ease-in delay-75 ">
      <div className="relative ">
        <img
          onClick={() => setModal((curr) => !curr)}
          src={closeBtn}
          className="absolute right-11 -top-[2rem] w-[1.3rem] hover:cursor-pointer hover:scale-105 transition-all"
        />
        <img
          onClick={() => swiperRef.current.slideNext()}
          src={nextBtn}
          className="bg-white absolute p-4 h-[3rem] w-[3rem] rounded-full right-0 top-[50%] -translate-y-[50%] hover:scale-105 transition-all"
        />
        <img
          onClick={() => swiperRef.current.slidePrev()}
          src={prevBtn}
          className="bg-white absolute p-4 h-[3rem] w-[3rem] rounded-full top-[50%] -translate-y-[50%] hover:scale-105 transition-all"
        />
        <Swiper
          modules={[Thumbs]}
          thumbs={{
            swiper:
              modalThumbsSwiper && !modalThumbsSwiper.destroyed
                ? modalThumbsSwiper
                : null,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={2}
          slidesPerView={1}
          loop={true}
          className="rounded-3xl hover:opacity-95 w-[30rem]"
        >
          {getImages()}
        </Swiper>
      </div>
      <Swiper
        modules={[Thumbs]}
        slidesPerView={4}
        watchSlidesProgress
        onSwiper={setModalThumbsSwiper}
        className="hidden md:flex justify-around mt-7 w-[36rem] "
      >
        {getThumbnails()}
      </Swiper>
    </div>
  );
};

export default ProductModal;

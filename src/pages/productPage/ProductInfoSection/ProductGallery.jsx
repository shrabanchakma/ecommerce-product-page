import { useState } from "react";
import data from "../../../constants/Images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import GoNextBtn from "./Buttons/GoNextBtn";
import GoPrevBtn from "./Buttons/GoPrevBtn";
import ProductModal from "./ProductModal";
const ProductGallary = () => {
  const products = [...data];
  const [modal, setModal] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const getThumbnails = () => {
    return (
      <>
        {products.map((product, idx) => (
          <SwiperSlide key={idx} className="">
            <span className="before:content-[''] before:absolute before:h-[6.8rem] before:w-[6.8rem] before:bg-white before:rounded-lg before:bottom-0 before:left-[50%] before:-translate-x-[50%] before:-z-10 "></span>
            <img
              key={idx}
              src={product.smallImg}
              alt={product.smallImg}
              className="rounded-lg  w-[5rem] lg:w-[6.8rem] mx-auto hover:border-[3px] border-orange transition-all hover:scale-105 hover:opacity-50 hover:cursor-pointer "
            />
          </SwiperSlide>
        ))}
      </>
    );
  };
  const getImages = () => {
    return (
      <>
        {products.map((product, idx) => (
          <SwiperSlide key={idx} className=" rounded-lg">
            <img
              key={idx}
              src={product.largeImg}
              alt={product.largeImg}
              className="md:rounded-3xl w-[200rem]"
            />
          </SwiperSlide>
        ))}
      </>
    );
  };
  return (
    <div className="w-full md:w-3/5 lg:w-1/2">
      <div className="hidden md:block">
        <Swiper
          modules={[Thumbs]}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          spaceBetween={2}
          slidesPerView={1}
          loop={true}
          onClick={() => setModal((curr) => !curr)}
          className="hidden md:flex overflow-hidden hover:cursor-pointer hover:opacity-90 transition ease-in delay-75 w-11/12 "
        >
          <GoPrevBtn isModal={false} />
          {getImages()}
          <GoNextBtn isModal={false} />
        </Swiper>
      </div>
      {/* for smaller screen */}
      <div className="block md:hidden">
        <Swiper
          modules={[Thumbs]}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          spaceBetween={2}
          slidesPerView={1}
          loop={true}
          className="flex overflow-hidden hover:cursor-pointer hover:opacity-90 transition ease-in delay-75 h-[20rem] "
        >
          <GoPrevBtn />
          {getImages()}
          <GoNextBtn />
        </Swiper>
      </div>
      {/* modal */}
      <div
        className={`${
          modal ? "hidden" : "hidden md:block"
        } absolute  -bottom-[1.5rem] -top-[14%] -right-[25%] -left-[25%] bg-lightBlack z-10`}
      >
        <ProductModal
          getImages={getImages}
          getThumbnails={getThumbnails}
          setModal={setModal}
        />
      </div>
      <div className="hidden md:block">
        <Swiper
          modules={[Thumbs]}
          slidesPerView={4}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
          className="grid-flow-col  justify-around lg:mt-7 xl:w-[36rem]"
        >
          {getThumbnails()}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductGallary;

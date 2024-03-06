import { useState } from "react";
import data from "../../../constants/Images";
import prevIcon from "../../../assets/images/icon-previous.svg";
import nextIcon from "../../../assets/images/icon-next.svg";
import closeIcon from "../../../assets/images/icon-close.svg";

const ProductGallary = () => {
  const products = [...data];
  const [value, setValue] = useState(0);
  const [modal, setModal] = useState(true);
  console.log(modal);
  const currentImg = products[value].largeImg;
  const getThumbnails = () => {
    return (
      <>
        {products.map((product, idx) => (
          <div key={idx} className="bg-white rounded-lg">
            <img
              onClick={() => setValue(idx)}
              key={idx}
              src={product.smallImg}
              alt={product.smallImg}
              className=" rounded-lg w-[6.8rem] hover:border-[3px] border-orange transition-all hover:scale-105 hover:opacity-50 hover:cursor-pointer"
            />
          </div>
        ))}
      </>
    );
  };
  const getImages = () => {
    return (
      <>
        {products.map((product, idx) => (
          <div key={idx} className="bg-white rounded-lg">
            <img
              onClick={() => setModal((prev) => !prev)}
              key={idx}
              src={product.largeImg}
              alt={product.largeImg}
              className="rounded-3xl "
            />
          </div>
        ))}
      </>
    );
  };
  const goNext = () => {
    console.log("go next working");
    setValue(value === products.length - 1 ? 0 : value + 1);
  };
  const goPrev = () => {
    console.log("got prev working");
    setValue(value === 0 ? products.length - 1 : value - 1);
  };
  return (
    <div className="w-full md:w-1/2 bg-green">
      <div className="hidden md:block  hover:cursor-pointer hover:opacity-90 transition ease-in delay-75  ">
        <img
          onClick={() => setModal((prev) => !prev)}
          src={currentImg}
          alt={products[0].largeImg}
          className="rounded-3xl "
        />
      </div>
      <div className="block md:hidden hover:cursor-pointer transition ease-in delay-75 relative">
        <img
          onClick={goPrev}
          src={prevIcon}
          alt={prevIcon}
          className="h-[3rem] w-[3rem] p-5 rounded-full bg-white absolute left-0 top-[50%] -translate-y-[50%] z-10 transition-all hover:scale-110"
        />
        <img
          onClick={() => setModal((prev) => !prev)}
          src={currentImg}
          alt={products[0].largeImg}
        />

        <img
          onClick={goNext}
          src={nextIcon}
          alt={nextIcon}
          className="h-[3rem] w-[3rem] p-5 rounded-full bg-white absolute right-0 top-[50%] -translate-y-[50%] z-10 transition-all hover:scale-110"
        />
      </div>
      {/* modal */}
      <div
        className={`${
          modal ? "hidden" : "hidden md:block"
        } absolute  inset-0 bg-lightBlack z-10`}
      >
        <div className="w-[35rem] flex flex-col items-center absolute  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ">
          <div className=" hover:cursor-pointer transition ease-in delay-75 relative">
            <img
              onClick={() => setModal((prev) => !prev)}
              src={closeIcon}
              alt={closeIcon}
              className="w-[1.8rem] absolute right-0 -top-10 z-20 transition-all hover:scale-110"
            />
            <img
              onClick={goPrev}
              src={prevIcon}
              alt={prevIcon}
              className="h-[3.5rem] w-[3.5rem] p-5 rounded-full bg-white absolute -left-6 top-[50%] -translate-y-[50%] z-10 transition-all hover:scale-110"
            />
            <div className="bg-white rounded-3xl">
              <img
                onClick={() => setModal((prev) => !prev)}
                src={currentImg}
                alt={products[0].largeImg}
                className="rounded-3xl hover:opacity-95"
              />
            </div>
            <img
              onClick={goNext}
              src={nextIcon}
              alt={nextIcon}
              className="h-[3.5rem] w-[3.5rem] p-5 rounded-full bg-white absolute -right-6 top-[50%] -translate-y-[50%] z-10 transition-all hover:scale-110"
            />
          </div>
          <div className="flex justify-around mt-7 w-[36rem]  ">
            {getThumbnails()}
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-around mt-7 w-[36rem] ">
        {getThumbnails()}
      </div>
    </div>
  );
};

export default ProductGallary;

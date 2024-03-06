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
          <img
            onClick={() => setValue(idx)}
            key={idx}
            src={product.smallImg}
            alt={product.smallImg}
            className="rounded-lg w-[6.8rem] hover:border-[3px] border-orange transition-all hover:scale-105 hover:opacity-50 hover:cursor-pointer"
          />
        ))}
      </>
    );
  };
  return (
    <div className="w-1/2">
      <div className=" bg-blue-500 hover:cursor-pointer hover:opacity-90 transition ease-in delay-75  ">
        <img
          onClick={() => setModal((prev) => !prev)}
          src={currentImg}
          alt={products[0].largeImg}
          className="rounded-3xl "
        />
      </div>
      {/* modal */}
      <div
        className={`${
          modal ? "hidden" : "hidden md:block"
        } absolute  right-0 -top-0 bottom-0 left-0 bg-lightBlack z-10`}
      >
        <div className="w-[35rem] flex flex-col items-center absolute  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ">
          <div className=" bg-blue-500 hover:cursor-pointer hover:opacity-90 transition ease-in delay-75  ">
            <img src="" alt="" />

            <img
              onClick={() => setModal((prev) => !prev)}
              src={currentImg}
              alt={products[0].largeImg}
              className="rounded-3xl "
            />
          </div>
          <div className="flex justify-around mt-7 w-[36rem] ">
            {getThumbnails()}
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-7 w-[36rem] ">
        {getThumbnails()}
      </div>
    </div>
  );
};

export default ProductGallary;

import { useState } from "react";
import data from "../../../constants/Images";
const ProductGallary = () => {
  const products = [...data];
  const [value, setValue] = useState(0);
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
    <div className="w-1/2 bg-green-500">
      <div className=" bg-blue-500 hover:cursor-pointer hover:opacity-90 transition ease-in delay-75">
        <img
          src={currentImg}
          alt={products[0].largeImg}
          className="rounded-3xl"
        />
      </div>
      <div className="flex justify-around mt-7 w-[36rem] ">
        {getThumbnails()}
      </div>
    </div>
  );
};

export default ProductGallary;

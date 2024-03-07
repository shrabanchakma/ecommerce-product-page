import AddToCartSection from "./AddToCartSection";

const ProductInfo = () => {
  return (
    <div className=" md:w-1/2   ml-0 p-5 md:p-7 md:ml-10 lg:ml-20  ">
      <div className="space-y-4  lg:space-y-10 ">
        <h3 className="text-[#E78032] font-medium md:font-bold text-sm md:text-base">
          SNEAKER COMPANY
        </h3>
        <h1 className="text-2xl lg:text-5xl font-bold w-11/12 md:w-full">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-[#B8BABE]">
          {`These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.`}
        </p>
        <div className="flex lg:block items-center justify-between  md:gap-1 lg:gap-0">
          <div className="text-2xl font-bold flex items-center">
            $125.00{" "}
            <span className="bg-[#FFEFE2] text-[#FF7D1B] p-[3px] px-3 ml-5 text-base rounded-md">
              50%
            </span>
          </div>
          <p className="text-[#B8BABE] font-bold line-through lg:mt-3">
            $250.00
          </p>
        </div>
        <AddToCartSection />
      </div>
    </div>
  );
};

export default ProductInfo;

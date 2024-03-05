import AddToCartSection from "./AddToCartSection";

const ProductInfo = () => {
  return (
    <div className="w-1/2 bg-blue-100 p-7 ml-20">
      <div className="space-y-10 w-4/5">
        <h3 className="text-[#E78032] font-bold">SNEAKER COMPANY</h3>
        <h1 className="text-5xl font-bold">Fall Limited Edition Sneakers</h1>
        <p className="text-[#B8BABE]">
          {`These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.`}
        </p>
        <div>
          <div className="text-2xl font-bold flex items-center">
            $125.00{" "}
            <span className="bg-[#FFEFE2] text-[#FF7D1B] p-[3px] px-3 ml-5 text-base rounded-md">
              50%
            </span>
          </div>
          <p className="text-[#B8BABE] font-bold line-through mt-3">$250.00</p>
        </div>
        <AddToCartSection />
      </div>
    </div>
  );
};

export default ProductInfo;

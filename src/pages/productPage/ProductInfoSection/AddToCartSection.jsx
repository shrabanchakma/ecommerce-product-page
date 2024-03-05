import "./AddToCartSection.css";
const AddToCartSection = () => {
  return (
    <div className="w-full flex items-center gap-5 ">
      {/* quantitySelector */}
      <div className="w-2/3 bg-[#F7F8FD] flex items-center justify-between rounded-lg py-[.25rem]">
        <button className="btn btn-ghost hover:bg-transparent text-3xl font-bold text-[#FF7D1B]  h-auto">
          -
        </button>
        <span className="text-xl font-bold mt-1">3 </span>
        <button className="btn btn-ghost hover:bg-transparent text-3xl font-bold text-[#FF7D1B] h-auto">
          +
        </button>
      </div>
      {/* add to cart button */}

      <button className="btn btn-primary w-3/5 py-[1.25rem] h-auto">
        Add to cart
      </button>
    </div>
  );
};

export default AddToCartSection;

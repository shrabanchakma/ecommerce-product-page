import { useContext, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ProductContext } from "../ProductPage/ProductPage";

const AddToCartSection = () => {
  const { setProductQuantity, productQuantity } = useContext(ProductContext);
  const [quantity, setQuantity] = useState(0);
  const updateQuantity = (operation) => {
    if (operation == "+") {
      setQuantity(quantity + 1);
    } else {
      if (!quantity == 0) {
        setQuantity(quantity - 1);
      }
    }
  };

  const updateProductQuantity = () => {
    if (productQuantity) setProductQuantity(quantity);
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-5 ">
      {/* quantitySelector */}
      <div className="w-full md:w-2/3 bg-[#F7F8FD] flex items-center justify-between rounded-lg py-[.25rem]">
        <button
          onClick={() => updateQuantity("-")}
          className="btn btn-ghost hover:bg-transparent text-3xl font-bold text-[#FF7D1B]  h-auto"
        >
          -
        </button>
        <span className="text-xl font-bold mt-1">{quantity}</span>
        <button
          onClick={() => updateQuantity("+")}
          className="btn btn-ghost hover:bg-transparent text-3xl font-bold text-[#FF7D1B] h-auto"
        >
          +
        </button>
      </div>
      {/* add to cart button */}

      <button
        onClick={updateProductQuantity}
        className="btn btn-primary w-full md:w-3/5  py-[1.25rem] h-auto bg-[#FF7D1B] hover:bg-[#FF7D1B] border-none text-white hover:scale-[1.04]"
      >
        <AiOutlineShoppingCart className="text-xl" />
        Add to cart
      </button>
    </div>
  );
};

export default AddToCartSection;

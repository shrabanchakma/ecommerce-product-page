import "./Navbar.css";
import cart from "../../../assets/images/icon-cart.svg";
import avatar from "../../../assets/images/image-avatar.png";
import menuIcon from "../../../assets/images/icon-menu.svg";
import closeIcon from "../../../assets/images/icon-close.svg";
import { useContext } from "react";
import { ProductContext } from "../../../pages/productPage/ProductPage/ProductPage";

const Navbar = () => {
  const { productQuantity } = useContext(ProductContext);

  const getNavOptions = () => {
    const navOptions = ["Collections", "Men", "Women", "About", "Contact"];
    return (
      <>
        {navOptions.map((option, idx) => (
          <li key={idx}>
            <a
              href="#"
              className="hover:before:content-[''] hover:before:absolute hover:before:h-1 hover:before:bg-[#FE7D1F] hover:before:w-full hover:before:left-0 hover:before:-bottom-[2.82rem] relative before:transition before:duration-300 before:ease-in"
            >
              {option}
            </a>
          </li>
        ))}
      </>
    );
  };
  return (
    <nav>
      <div className="navbar h-[7rem] border-b-[1px] ">
        <div className="flex-1">
          {/* logo and menu items */}
          {/* drawer for mobile screen*/}
          <div className="drawer md:hidden z-10 w-auto  ">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost hover:bg-transparent drawer-button pr-0"
              >
                <img src={menuIcon} alt={menuIcon} />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>

              <aside className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay py-2 px-4 mb-10"
                >
                  <img src={closeIcon} alt="" />
                </label>
                <ul>{getNavOptions()}</ul>
              </aside>
            </div>
          </div>
          <a className="text-2xl sm:text-3xl font-bold  btn btn-ghost hover:bg-transparent mb-[.3rem] md:mb-0">
            sneakers
          </a>
          <ul className="ml-10 hidden md:flex gap-4 ">{getNavOptions()}</ul>
        </div>
        <div className="flex-none mr-10">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle relative"
            >
              <div className="indicator">
                <img src={cart} alt={avatar} />
                <span className="badge badge-sm indicator-item text-white bg-[#FF7D1C]">
                  {productQuantity}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content "
            >
              <div
                className="card-body absolute w-[19rem] sm:min-w-[22rem]  rounded-lg shadow-2xl bg-base-100  -right-[5.5rem]  md:right-0"
                id="p-custom"
              >
                <h1 className="font-bold text-lg p-5 border-b-[1px]">Cart</h1>
                <div className="min-h-[10rem] flex items-center justify-center font-bold text-[#787A86]">
                  Your cart is empty
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar  hover:bg-[#D66718] w-[3.2rem] h-[3.2rem]"
            >
              <div className="w-12 rounded-full">
                <img src={avatar} alt={avatar} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

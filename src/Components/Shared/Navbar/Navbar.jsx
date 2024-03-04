import "./Navbar.css";
import cart from "../../../assets/images/icon-cart.svg";
import avatar from "../../../assets/images/image-avatar.png";
const Navbar = () => {
  const navOptions = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <nav>
      <div className="navbar h-[7rem] border-b-[1px] ">
        <div className="flex-1">
          <a className="text-3xl font-bold  btn btn-ghost hover:bg-transparent">
            sneakers
          </a>
          <ul className="ml-10 flex gap-4 ">
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
          </ul>
        </div>
        <div className="flex-none mr-10">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle "
            >
              <div className="indicator">
                <img src={cart} alt={avatar} />
                <span className="badge badge-sm indicator-item text-white bg-[#FF7D1C]">
                  8
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content min-w-[22rem]  rounded-lg shadow bg-base-100"
            >
              <div className="card-body" id="p-custom">
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

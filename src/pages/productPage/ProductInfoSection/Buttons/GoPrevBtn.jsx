import { useSwiper } from "swiper/react";
import nextBtnIcon from "../../../../assets/images/icon-previous.svg";
const GoPrevBtn = ({ isModal }) => {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slidePrev()}>
      <img
        onClick={() => console.log(swiper)}
        src={nextBtnIcon}
        alt={nextBtnIcon}
        className={`${
          isModal
            ? "block -left-6 h-[3.5rem] w-[3.5rem] "
            : "block md:hidden left-0 h-[3rem] w-[3rem] "
        }  p-5 rounded-full bg-white absolute top-[50%] -translate-y-[50%] z-10 transition-all hover:scale-110`}
      />
    </button>
  );
};

export default GoPrevBtn;

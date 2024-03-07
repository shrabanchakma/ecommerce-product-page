import { useSwiper } from "swiper/react";
import nextBtnIcon from "../../../../assets/images/icon-next.svg";
const GoNextBtn = ({ isModal }) => {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slideNext(250)}>
      <img
        src={nextBtnIcon}
        alt={nextBtnIcon}
        className={`${
          isModal ? "block" : "block md:hidden"
        } h-[3rem] w-[3rem] p-5 rounded-full bg-white absolute right-0 top-[50%] -translate-y-[50%] z-10 transition-all hover:scale-110`}
      />
    </button>
  );
};

export default GoNextBtn;

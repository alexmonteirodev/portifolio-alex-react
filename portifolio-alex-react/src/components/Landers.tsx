import ImgCircle from "./imgCircle";

import natalia from "../assets/imgs/landers/natalia.png";
import alex from "../assets/imgs/landers/alex.png";
import laura from "../assets/imgs/landers/laura.png";
import dhiego from "../assets/imgs/landers/dhiego.png";

const Landers = () => {
  return (
    <div className="flex flex-row gap-2">
      <ImgCircle img={laura} alt="Avatar" size="small" />
      <ImgCircle img={alex} alt="Avatar" size="small" />
      <ImgCircle img={natalia} alt="Avatar" size="small" />
      <a href="https://www.odhcorrea.com/" target="blank">
        <ImgCircle img={dhiego} alt="Avatar" size="small" />
      </a>
    </div>
  );
};

export default Landers;

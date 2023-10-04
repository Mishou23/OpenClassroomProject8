import "./collapse.scss";
import Header from "../Header/index";
import ImgSrc from "../../../images/landscape.png";

export default function Banner() {
  return (
    <header>
      <Header
        imgSrc={ImgSrc}
        showHeaderText={false}
        showHeaderDiv={true}
        hideOverlay={true}
      />
    </header>
  );
}

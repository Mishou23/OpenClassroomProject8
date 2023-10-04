import "./index.scss";
import Banner from "../../components/About/banner";
import Collapse from "../../components/About/collapse";
import Footer from "../../components/Footer/footer";

export default function About() {
  return (
    <>
      <div className="About-container">
        <Banner />
        <Collapse />
      </div>
      <Footer />
    </>
  );
}

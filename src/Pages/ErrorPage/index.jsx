import ErrorPage from "../../components/Error/error";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/footer";
import "./index.scss";
export default Error = () => {
  return (
    <>
      <div className="headerContainer">
        <Header showHeaderDiv={false} />
        <ErrorPage />
      </div>
      <Footer />
    </>
  );
};

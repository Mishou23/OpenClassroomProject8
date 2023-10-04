import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Details from "../../components/Cards/CardsDetails/details/main";
import Slideshow from "../../components/Cards/CardsDetails/Slideshow/slideshow";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/index";
import DropContent from "../../components/Cards/CardsDetails/details/dropContent/index";
import { getHousingData } from "../../components/Cards/CardsDetails/Housing/housing";
import "./style.scss";

export default function CardDetails() {
  const navigate = useNavigate();
  const housingData = getHousingData();

  useEffect(() => {
    if (!housingData) {
      navigate("/error");
    }
  }, [housingData, navigate]);

  if (!housingData) {
    return null;
  }

  return (
    <>
      <div className="airbnb-box">
        <Header showHeaderDiv={false} />
        <Slideshow housingData={housingData} />
        <Details housingData={housingData} />
        <DropContent housingData={housingData} />
      </div>
      <Footer />
    </>
  );
}

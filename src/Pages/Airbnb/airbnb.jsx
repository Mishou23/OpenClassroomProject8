import React from 'react';
import Airbnb from '../../components/Cards/CardsDetails/Airbnb/Airbnb';
import Slideshow from '../../components/Cards/CardsDetails/Slideshow/slideshow';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/index';
import Dropdown from '../../components/Cards/CardsDetails/Dropdown/index';
import { getHousingData } from '../../components/Cards/CardsDetails/Housing/housing'; 
import ErrorPage from '../ErrorPage/index';
import './style.scss';

export default function CardDetails() {

  // Call the getHousingData function and store the result in a variable
  const housingData = getHousingData();

  if (!housingData) {
    return <ErrorPage />;
  }
  return (
    <>
      <Header showHeaderDiv={false} />
      <Slideshow housingData={housingData} />
      <Airbnb housingData={housingData} />
      <Dropdown housingData={housingData} />
      <Footer />
    </>
  );
}







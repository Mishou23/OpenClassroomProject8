import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../Header/index';
import './style.css';
import Data from '../../../logements';

export default function CardsDetails() {
  const { id } = useParams(); // Get the ID from the URL

  // Find the data object with the matching ID
  const selectedData = Data.find(item => item.id === id);

  // Define the props for the Header component
  const headerProps = {
    showHeaderDiv: true, // Always show the header div
    showHeaderText: false, // Conditionally show the header text based on selectedData
    imgSrc: selectedData ? selectedData.pictures[0] : '', // Provide the image source
  };

  return (
    <div>
      <Header {...headerProps} />
      <div className="header">
        <div className="imageContainer">
          <Link to="/">Back to All Cards</Link>
        </div>
      </div>
    </div>
  );
}

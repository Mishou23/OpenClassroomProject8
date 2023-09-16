import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../Header/index';
import Footer from '../footer'

import './style.css';
import Data from '../../../logements';

// Import your SVG icons
import LeftChevronIcon from '../../../../icons/left-chevron.svg';
import RightChevronIcon from '../../../../icons/right-chevron.svg';

export default function CardsDetails() {
  const { id } = useParams(); // Get the ID from the URL

  // Find the data object with the matching ID
  const selectedData = Data.find(item => item.id === id);

  // Create state to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Define the props for the Header component
  const headerProps = {
    showHeaderDiv: true, // Always show the header div
    showHeaderText: false, // Conditionally show the header text based on selectedData
    imgSrc: selectedData ? selectedData.pictures[currentImageIndex] : '', // Provide the image source
    imageSliderProps: {
      images: selectedData ? selectedData.pictures : [], // Array of images to display
      currentIndex: currentImageIndex, // Current image index
      onPrevClick: () => {
        if (currentImageIndex > 0) {
          setCurrentImageIndex(currentImageIndex - 1);
        }
      },
      onNextClick: () => {
        if (currentImageIndex < (selectedData ? selectedData.pictures.length - 1 : 0)) {
          setCurrentImageIndex(currentImageIndex + 1);
        }
      },
    },
  };

  return (
    <div>
      <Header {...headerProps} hideOverlay={false} />
      <div className="header">
        <div className="imageControls">
          {/* SVG icons for previous and next */}
          <div
            className="controlButton"
            onClick={headerProps.imageSliderProps.onPrevClick}
            disabled={currentImageIndex === 0}
          >
            <img src={LeftChevronIcon} alt="Previous" />
          </div>
          <div
            className="controlButton"
            onClick={headerProps.imageSliderProps.onNextClick}
            disabled={currentImageIndex === selectedData.pictures.length - 1}
          >
            <img src={RightChevronIcon} alt="Next" />
          </div>
        </div>
        <div className='airbnbContent'>
        <div className='contents'>
        <div className='airbnbName'>
          <h1>{selectedData.title}</h1>
        </div>
        <div className='location'>
        <p>{selectedData.location}</p>
        </div>
        <div className='tags'>
        {selectedData.tags.map((tag, index) => (
        <div className="name" key={index}>
         <div>{tag}</div>
        </div>
        ))}
        </div>
        </div>
       <div className='host'>
       <div className='identity'>
       <div className='name'>
          <p>{selectedData.host.name}</p>
        </div>
        <div className='photo'>
          <img src={selectedData.host.picture}></img>
        </div>
       </div>
       </div>
        </div>
      </div>
      <div className="imageContainer">
          <Link to="/">Back to All Cards</Link>
        </div>
        
    </div>

  );
}

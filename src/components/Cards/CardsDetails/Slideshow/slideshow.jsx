import './index.scss';
import React, { useState } from 'react';

// Import your SVG icons
import LeftChevronIcon from '../../../../../icons/left-chevron.svg';
import RightChevronIcon from '../../../../../icons/right-chevron.svg';
export default function Slideshow({ housingData }) {
  // Create state to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  // Function to handle navigation
  const handleNavigation = (direction) => {
    if (direction === 'prev') {
      if (currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      }
    } else if (direction === 'next') {
      if (currentImageIndex < (housingData ? housingData.pictures.length - 1 : 0)) {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    }
  };

  return (
    <div className="slideContainer">
      <img
        src={housingData ? housingData.pictures[currentImageIndex] : ''}
        alt="Image Description"
        className="slideImage"
      />

      <div className="imageControls">
        <div
          className="controlButtonL"
          onClick={() => handleNavigation('prev')}
          disabled={currentImageIndex === 0}
        >
          <img src={LeftChevronIcon} alt="Previous" className="chevronIcon" />
        </div>
        {/* Button to navigate to the next image */}
        <div
          className="controlButtonR"
          onClick={() => handleNavigation('next')}
          disabled={currentImageIndex === (housingData ? housingData.pictures.length - 1 : 0)}
        >
          <img src={RightChevronIcon} alt="Next" className="chevronIcon" />
        </div>
      </div>
    </div>
  );
}
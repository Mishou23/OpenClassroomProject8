import React from 'react';
import { useParams } from 'react-router-dom';
import './index.css';
import Data from '../../../logements';

// Import your SVG icons
import LeftChevronIcon from '../../../../icons/left-chevron.svg';
import RightChevronIcon from '../../../../icons/right-chevron.svg';

export default function Slideshow() {
  const { id } = useParams(); // Get the ID from the URL

  // Find the data object with the matching ID
  const selectedData = Data.find(item => item.id === id);

  // Create state to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  // Function to handle navigation
  const handleNavigation = (direction) => {
    if (direction === 'prev') {
      if (currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      }
    } else if (direction === 'next') {
      if (currentImageIndex < (selectedData ? selectedData.pictures.length - 1 : 0)) {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    }
  };

  return (
    <div className="slideContainer">
      <img
        src={selectedData ? selectedData.pictures[currentImageIndex] : ''}
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
          disabled={currentImageIndex === selectedData.pictures.length - 1}
        >
          <img src={RightChevronIcon} alt="Next" className="chevronIcon"/>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import Data from '../../../../logements';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

// Define the StarRating component once
const StarRating = ({ rating }) => {
  const maxRating = 5; // Maximum rating possible

  // Create an array of star elements
  const stars = [];

  // Add filled stars
  for (let i = 0; i < maxRating; i++) {
    const starIcon = i < rating ? solidStar : regularStar;
    stars.push(
      <span key={i} className="star">
        <FontAwesomeIcon icon={starIcon} />
      </span>
    );
  }

  return <div className="star-rating">{stars}</div>;
};

export default function Airbnb() {
  const { id } = useParams(); // Get the ID from the URL

  // Find the data object with the matching ID
  const selectedData = Data.find(item => item.id === id);

  return (
    <div>
      <div className="airbnbContainer">
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
                <img src={selectedData.host.picture} alt={selectedData.host.name} />
              </div>
            </div>
            <div className='ratings'>
                <StarRating rating={selectedData.host.rating} />
                {console.log(selectedData.rating)}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Data from '../../../logements';
import { useParams } from 'react-router-dom';

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
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <Link to="/">Back to All Cards</Link>
      </div>
    </div>
  );
}

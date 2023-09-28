import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ rating }) => {
  const maxRating = 5; // Maximum rating possible

  // Create an array of star elements
  const stars = [];

  // Add filled stars
  for (let i = 0; i < maxRating; i++) {
    const starIcon = i < rating ? solidStar : solidStar;
    const starColor = i < rating ? 'rgba(255, 96, 96, 1)' : 'rgba(227, 227, 227, 1)';
    stars.push(
      <span key={i} className="star">
        <FontAwesomeIcon icon={starIcon} style={{ color: starColor }} />
      </span>
    );
  }

  return <div className="star-rating">{stars}</div>;
};

export default function Airbnb({ housingData }) {
  console.log('Housing Data in Airbnb:', housingData);
  
  return (
    <div>
      <div className='main-container'>
        <div className="airbnbContainer">
          <div className='airbnbContent'>
            <div className='contents'>
              <div className='airbnbName'>
                <h1>{housingData.title}</h1>
              </div>
              <div className='location'>
                <p>{housingData.location}</p>
              </div>
              <div className='tags'>
                {housingData.tags.map((tag, index) => (
                  <div className="name" key={index}>
                    <div>{tag}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className='host'>
              <div className='pseudo'>
                <div className='identity'>
                  <div className='name'>
                    <p>{housingData.host.name}</p>
                  </div>
                  <div className='photo'>
                    <img src={housingData.host.picture} alt={housingData.host.name} />
                  </div>
                </div>
                <div className='ratings'>
                  <StarRating rating={housingData.rating} />
                  {console.log(housingData.rating)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom'; // Import Link from React Router
import './index.css';
import Data from '../../logements';
import logoWhite from '../../../images/LOGO_white.png';

export default function Cards() {
  return (
    <div>
      <div className="card-container">
        <div className="card-bg">
          {Data.map((item, index) => (
            <Link to={`/details/${item.id}`} key={index}> 
              <div className="card">
                <img src={item.cover} alt={item.title} />
                <h3>{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="footer">
        <div className="content">
          <div className="logo-white">
            <img src={logoWhite} alt="Logo" />
          </div>
          <div className="copyright">
            <p>&copy; 2020 Kasa. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}
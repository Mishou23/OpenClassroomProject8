import './style.css'
import { Link } from 'react-router-dom';
import logoSrc from '../../../../images/LOGO.png';
import Data from '../../../logements';
export default function CardDetails() {
    return (

      <div>
      <div className="navbar">
        <div className="logo">
          <img src={logoSrc} alt="Logo" className="logo-img" />
        </div>
        <ul className="navbar-ul">
          <li>
            <Link to="/" className="nav-link">Accueil</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">A Propos</Link>
          </li>
        </ul>
      </div>
      {/* <div className="header">
        <div className="imageContainer">
          <img src={Data[id].pictures} alt="Image Description" className="header-img" />
        </div>
      </div> */}
    </div>
    )
    }
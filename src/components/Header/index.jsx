import './index.css'
import { Link } from 'react-router-dom';
import imgSrc from '../../../images/IMG.png';
import logoSrc from '../../../images/LOGO.png';
export default function Header() {
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
      <div className="header">
        <div className="imageContainer">
          <h1 className="header-text">Chez vous, partout et ailleurs</h1>
          <div className="imageOverlay"></div>
          <img src={imgSrc} alt="Image Description" className="header-img" />
        </div>
      </div>
    </div>

    )
  }

  
import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import logoSrc from '../../../images/LOGO.png';
import defaultImgSrc from '../../../images/IMG.png'; // Default image

export default function Header(props) {
  const imgSrc = props.imgSrc || defaultImgSrc; // Use default if imgSrc prop is not provided
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
     {props.showHeaderDiv && <div className="header">
        <div className="imageContainer">
        {props.showHeaderText && <h1 className="header-text">Chez vous, partout et ailleurs</h1>}
         {props.hideOverlay && <div className="imageOverlay"></div>}
          <img src={imgSrc} alt="Image Description" className="header-img" />
        </div>
      </div>}
    </div>
  );
}

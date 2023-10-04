import logoWhite from "../../../images/LOGO_white.png";
import "./style.scss";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="content">
        <div className="logo-white">
          <img src={logoWhite} alt="Logo" />
        </div>
        <div className="copyright">
          <p>&copy; 2020 Kasa. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

import { Link } from 'react-router-dom'; 
import './error.scss'
const ErrorPage = () => {
  return (
    <div className='errorContainer'>
      <div className="message">
        <h1> 404</h1>
      </div>
      <div className="description">
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <div className="home">
        <Link to="/" className="homepage">Retourner sur la page d’accueil</Link>
      </div>
    </div>
  );
};

export default ErrorPage;

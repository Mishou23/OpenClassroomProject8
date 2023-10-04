import { Link } from "react-router-dom";
import "./error.scss";
const ErrorPage = () => {
  return (
    <main className="errorContainer">
      <section className="message">
        <h1> 404</h1>
      </section>
      <div className="description">
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <div className="home">
        <Link to="/" className="homepage">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </main>
  );
};

export default ErrorPage;

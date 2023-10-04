import { Link } from "react-router-dom"; // Import Link from React Router
import "./index.scss";
import Data from "../../logements";

export default function Cards() {
  return (
    <main>
      <section className="card-container">
        <div className="card-bg">
          {Data.map((item, index) => (
            <Link to={`/details/${item.id}`} key={index}>
              <article className="card">
                <img src={item.cover} alt={item.title} />
                <h3>{item.title}</h3>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

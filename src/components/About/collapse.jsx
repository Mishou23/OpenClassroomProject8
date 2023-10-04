import "./collapse.scss";
import Dropdown from "../Dropdown/dropdown";

export default function Collapse() {
  // Define data for all four dropdowns
  const dropdownData = [
    {
      title: "Fiabilité",
      content: (
        <div className="details">
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </div>
      ),
    },
    {
      title: "Respect",
      content: (
        <div className="details">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </div>
      ),
    },
    {
      title: "Service",
      content: (
        <div className="details">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </div>
      ),
    },
    {
      title: "Sécurité",
      content: (
        <div className="details">
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </div>
      ),
    },
  ];

  return (
    <main className="dropContainer">
      {dropdownData.map((dropdown, index) => (
        <article className="collapse" key={index}>
          <div>
            <Dropdown title={dropdown.title} content={dropdown.content} />
          </div>
        </article>
      ))}
    </main>
  );
}

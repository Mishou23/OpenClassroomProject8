import React, { useState } from 'react';
import './style.scss';

export default function Collapse() {
  // State to track whether each dropdown is open or closed
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [dropdown3Open, setDropdown3Open] = useState(false);
  const [dropdown4Open, setDropdown4Open] = useState(false);

  // Function to toggle the dropdown's open/closed state
  const toggleDropdown1 = () => setDropdown1Open(!dropdown1Open);
  const toggleDropdown2 = () => setDropdown2Open(!dropdown2Open);
  const toggleDropdown3 = () => setDropdown3Open(!dropdown3Open);
  const toggleDropdown4 = () => setDropdown4Open(!dropdown4Open);

  return (
    <div className='container'>
      <div className={`dropdown ${dropdown1Open ? 'open' : ''}`}>
        <div className='title' onClick={toggleDropdown1}>
          <h1>FIabilité</h1>
          <div className='chevron'>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <style>{`svg { fill: #ffffff; }`}</style>
              <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
            </svg>
          </div>
        </div>
        <div className='list'>
          <div className='details'>
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
          </div>
        </div>
      </div>

      <div className={`dropdown ${dropdown2Open ? 'open' : ''}`}>
        <div className='title' onClick={toggleDropdown2}>
          <h1>Respect</h1>
          <div className='chevron'>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <style>{`svg { fill: #ffffff; }`}</style>
              <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
            </svg>
          </div>
        </div>
        <div className='list'>
          <div className='details'>
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
          </div>
        </div>
      </div>

      <div className={`dropdown ${dropdown3Open ? 'open' : ''}`}>
        <div className='title' onClick={toggleDropdown3}>
          <h1>Service</h1>
          <div className='chevron'>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <style>{`svg { fill: #ffffff; }`}</style>
              <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
            </svg>
          </div>
        </div>
        <div className='list'>
          <div className='details'>
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
          </div>
        </div>
      </div>

      <div className={`dropdown ${dropdown4Open ? 'open' : ''}`}>
        <div className='title' onClick={toggleDropdown4}>
          <h1>Sécurité</h1>
          <div className='chevron'>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <style>{`svg { fill: #ffffff; }`}</style>
              <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
            </svg>
          </div>
        </div>
        <div className='list'>
          <div className='details'>
            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

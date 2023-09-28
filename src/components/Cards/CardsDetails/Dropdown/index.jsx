import React, { useState } from 'react';
import './style.scss'; 

export default function Dropdown({ housingData }) {
  // State to control the visibility and rotation of dropdown content
  const [showDescription, setShowDescription] = useState(false);
  const [showEquipments, setShowEquipments] = useState(false);
  const [rotateChevronDescription, setRotateChevronDescription] = useState(false);
  const [rotateChevronEquipments, setRotateChevronEquipments] = useState(false);

  return (
    <div className="Dropdowns">
      <div className="Dropdown">
        <div className="drop-des">
          <div
            className={`headline ${showDescription ? 'active' : ''}`}
            onClick={() => {
              setShowDescription(!showDescription);
              setRotateChevronDescription(!rotateChevronDescription); // Toggle rotation
              setRotateChevronEquipments(false); // Reset the other chevron
            }}
          >
            <h3>Description</h3>
            <div className={`chevron ${rotateChevronDescription ? 'rotate' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <style>{`svg { fill: #ffffff; }`}</style>
                <path
                  d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={`des-text ${showDescription ? 'active' : ''}`}>
          <p>{housingData.description}</p> {/* Use housingData prop */}
        </div>
      </div>
      <div className="Dropdown">
        <div className="drop-equip">
          <div
            className={`headline ${showEquipments ? 'active' : ''}`}
            onClick={() => {
              setShowEquipments(!showEquipments);
              setRotateChevronEquipments(!rotateChevronEquipments); // Toggle rotation
              setRotateChevronDescription(false); // Reset the other chevron
            }}
          >
            <h3>Équipements</h3>
            <div className={`chevron ${rotateChevronEquipments ? 'rotate' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <style>{`svg { fill: #ffffff; }`}</style>
                <path
                  d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={`equip-text ${showEquipments ? 'active' : ''}`}>
          <div className="equipList">
            {housingData.equipments.map((equip, index) => (
              <div className="name" key={index}>
                <div>{equip}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

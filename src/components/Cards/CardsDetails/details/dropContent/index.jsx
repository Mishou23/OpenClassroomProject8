import React from "react";
import Dropdown from "../../../../Dropdown/dropdown";

export default function DropContent({ housingData }) {
  return (
    <div className="Dropdowns">
      <Dropdown
        title="Description"
        content={<p>{housingData.description}</p>} // Pass the content as a prop
      />
      <Dropdown
        title="Équipements"
        content={
          <div className="equipList">
            {housingData.equipments.map((equip, index) => (
              <div className="name" key={index}>
                <div>{equip}</div>
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
}

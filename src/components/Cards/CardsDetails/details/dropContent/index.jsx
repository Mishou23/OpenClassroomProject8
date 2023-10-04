import React from "react";
import Dropdown from "../../../../Dropdown/dropdown";

export default function DropContent({ housingData }) {
  return (
    <section className="Dropdowns">
      <Dropdown title="Description">
        <p>{housingData.description}</p>
      </Dropdown>
      <Dropdown title="Équipements">
        <article className="equipment-list">
          {housingData.equipments.map((equip, index) => (
            <div className="equipment-name" key={index}>
              {equip}
            </div>
          ))}
        </article>
      </Dropdown>
    </section>
  );
}

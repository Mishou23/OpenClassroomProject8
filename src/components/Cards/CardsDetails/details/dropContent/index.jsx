import React from "react";
import Dropdown from "../../../../Dropdown/dropdown";

export default function DropContent({ housingData }) {
  return (
    <section className="Dropdowns">
      <Dropdown
        title="Description"
        content={<p>{housingData.description}</p>} // Pass the content as a prop
      />
      <Dropdown
        title="Équipements"
        content={
          <article className="equipList">
            {housingData.equipments.map((equip, index) => (
              <div className="name" key={index}>
                <div>{equip}</div>
              </div>
            ))}
          </article>
        }
      />
    </section>
  );
}

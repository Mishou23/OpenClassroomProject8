import React, { useState } from "react";
import "./style.scss";
export default function Dropdown({ title, content }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [rotateChevron, setRotateChevron] = useState(false);

  return (
    <div className="Dropdown">
      <div className="drop-title">
        <div
          className={`headline ${showDropdown ? "active" : ""} `}
          onClick={() => {
            setShowDropdown(!showDropdown);
            setRotateChevron(!rotateChevron);
          }}
        >
          <h3>{title}</h3>
          <div className={`chevron ${rotateChevron ? "rotate" : ""}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <style>{`svg { fill: #ffffff; }`}</style>
              <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
            </svg>
          </div>
        </div>
      </div>
      <div className={`drop-content ${showDropdown ? "active" : ""}`}>
        {content}
      </div>
    </div>
  );
}

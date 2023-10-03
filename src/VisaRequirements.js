// VisaRequirements.js
import React from "react";
import visaData from "../data/visaRequirements.json";

const VisaRequirements = () => {
  return (
    <div>
      <h2>Visa Requirements</h2>
      <ul>
        {visaData.map((country) => (
          <li key={country.name}>
            <a href={country.visaLink}>{country.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VisaRequirements;

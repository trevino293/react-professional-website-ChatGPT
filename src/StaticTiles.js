// JavaScript source code
import React from 'react';
import './StaticTiles.css'; // Ensure you create this CSS file

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Tile = ({ title, description, link, icon, label }) => {
  return (
    <div style={{StaticTiles}} className="tile">
        <div style={{marginBottom: '10px', fontWeight: 'bold'}} className="tile-title">{title}</div>
        <div style={{marginBottom: '10px'}} className="tile-description">{description}</div>
        <a href={link} style={{ textDecoration: 'none', color: 'inherit' }}>
        <FontAwesomeIcon icon={icon} size="2x" style={{ color: '#333' }} /> {label}
        </a>
    </div>

  );
};

const StaticTiles = () => {
  // Example array of tiles to display. Expand or replace as needed.
  return (
    <div className="tile-container">
         <Tile title="React-Professional-Website" description="This architecture depicts the setup and deployment of this website." link="https://example.com" icon={faGithub} label="Github link" />
         <Tile title="Cashflow Dispersion Model" description="An independent research project using the economic order quantity to maximize avalible asset investments" link="https://github.com/trevino293/CFD/blob/main/CFD.pdf" icon={faGithub} label="Github link" />
    </div>
  );
};

export default StaticTiles;


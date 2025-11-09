import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          <strong>Data Source:</strong> Tinder Dataset from Kaggle -
          <a href="https://www.kaggle.com/datasets/ashleyxu98/tinder" target="_blank" rel="noopener noreferrer">
            https://www.kaggle.com/datasets/ashleyxu98/tinder
          </a>
        </p>
        <p className="footer-text">
          <strong>Course:</strong> DOTE 5110 Statistical Analysis | <strong>Year:</strong> 2025
        </p>
        <p className="footer-note">
          This analysis is for educational purposes as part of a statistical analysis group project.
        </p>
      </div>
    </footer>
  );
}

export default Footer;


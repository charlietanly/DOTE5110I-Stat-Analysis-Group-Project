import React from 'react';
import './HeroSection.css';

function HeroSection({ introRef, scrollToSection, dataRef }) {
  return (
    <section ref={introRef} className="section hero-section">
      <div className="hero">
        <div className="hero-left">
          <div className="hero-content">
            <h1 className="hero-title">Analysis of Tinder Profile Attributes and User Activity</h1>
            <p className="hero-subtitle">DOTE 5110 Statistical Analysis - Group 7</p>
            <div className="group-members">
              <p><strong>Group Members:</strong></p>
              <p>KWOK Tsz Him (1155088739)</p>
              <p>CHUI Yin Tung Chimney (1155244154)</p>
              <p>LIN Bei (1155245080)</p>
              <p>TAN Lee Yan (1155245076)</p>
              <p>TSANG Heung Chuen (1155241248)</p>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="iphone-mockup">
            <img
              src="https://i.imgur.com/SsIfGgG.gif"
              alt="Tinder App Interface"
              className="tinder-gif"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;


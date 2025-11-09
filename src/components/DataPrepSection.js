import React from 'react';
import Card from './Card';
import './DataPrepSection.css';

function DataPrepSection({ dataRef, scrollToSection, swipeRef, statsCardRef, counts }) {
  return (
    <section ref={dataRef} className="section section-alt">
      <div className="container">
        <h2 className="section-title">Project Introduction</h2>
        <div className="content-block">
          <p className="intro-text">
            In hyper-dense, high-pressure Hong Kong, young adults increasingly rely on dating apps yet struggle to form meaningful connections.
            This study leverages Tinder behavioral data to uncover structural and behavioral barriers to matching, using exploratory data
            analysis (EDA), regression modeling, and predictive insights to propose actionable interventions for improving romantic success.
          </p>
        </div>

        <h3 className="subsection-title">Research Proposal & Data Preparation</h3>
        <div className="methodology">
          <div className="cards-container">
            <Card
              icon="🎯"
              title="Research Goal"
              description="Identify behavioral and demographic factors that influence Tinder user engagement"
              variant="gradient"
            />
            <Card
              icon="🧑‍🤝‍🧑"
              title="Age Range"
              description="Age 18 - 65"
              variant="gradient"
            />
            <Card
              icon="📊"
              title="Dependent variable"
              description="matches / swipe_likes = match rate"
              variant="gradient"
            />
          </div>
          {/* <h4>Research Goal</h4>
          <p>Identify behavioral and demographic factors that influence Tinder user engagement</p>

          <h4>Data Pre-Processing</h4>
          <ul>
            <li><strong>Basic Cleaning:</strong> Checked for null values (none found)</li>
            <li><strong>Data Removal:</strong> Removed inactive users, zero behavioral activity, and ages outside 18-65 range</li>
            <li><strong>Feature Engineering:</strong> Created match_rate variable (dependent variable = matches / swipe_likes)</li>
          </ul> */}

          <h4>Dataset Summary</h4>
          <div className="floating-stats-card" ref={statsCardRef}>
            <div className="floating-stat-item">
              <div className="floating-stat-value">{counts.original.toLocaleString()}</div>
              <div className="floating-stat-label">Original Size</div>
              <div className="floating-stat-desc">users × 31 columns</div>
            </div>
            <div className="floating-stat-divider"></div>
            <div className="floating-stat-item">
              <div className="floating-stat-value">{counts.final.toLocaleString()}</div>
              <div className="floating-stat-label">Final Size</div>
              <div className="floating-stat-desc">users × 32 columns</div>
            </div>
            <div className="floating-stat-divider"></div>
            <div className="floating-stat-item">
              <div className="floating-stat-value">{counts.removed.toLocaleString()}</div>
              <div className="floating-stat-label">Removed</div>
              <div className="floating-stat-desc">inactive/invalid users</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default DataPrepSection;


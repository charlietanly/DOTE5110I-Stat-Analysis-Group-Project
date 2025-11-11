import React from 'react';
import './ModelDefinitionsSection.css';

function ModelDefinitionsSection({ modelDefRef, scrollToSection, regressionRef }) {
  return (
    <section ref={modelDefRef} className="section model-def-section">
      <div className="container">
        <h2 className="section-title">Model Definitions</h2>
        <p className="section-intro">
          We developed three regression models to predict match rate, progressively adding complexity 
          to capture demographic interactions and behavioral patterns.
        </p>

        <div className="model-definitions-container">
          <div className="table-wrapper">
            <table className="model-definitions-table">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Formula</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Model 1</strong></td>
                  <td><code>match_rate ~ user_age + gender</code></td>
                </tr>
                <tr>
                  <td><strong>Model 2</strong></td>
                  <td><code>match_rate ~ user_age + gender + education + age_square + gender * education + user_age * education + gender * user_age</code></td>
                </tr>
                <tr>
                  <td><strong>Model 3</strong></td>
                  <td><code>match_rate ~ user_age + gender + education + age_square + gender * education + user_age * education + gender * user_age + swipe_likes + swipe_passes + ageFilterMin + ageFilterMax</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModelDefinitionsSection;


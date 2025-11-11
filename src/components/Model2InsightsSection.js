import React from 'react';
import './Model2InsightsSection.css';

function Model2InsightsSection({ model2InsightsRef }) {
    return (
        <section ref={model2InsightsRef} className="section section-alt model2-insights-section">
            <div className="container">
                <h2 className="section-title">Model 2 Insights</h2>
                {/* <p className="section-intro">
          Model 2 reveals how demographics interact to influence match rates. 
          Here's what the data tells us about the combined effects of gender, age, and education.
        </p> */}

                <div className="insights-grid">
                    {/* Female with Education */}
                    <div className="insight-card">
                        <div className="insight-header">
                            <span className="insight-icon">👩‍🎓</span>
                            <h3>Female with Education</h3>
                        </div>
                        <div className="insight-body">
                            <div className="insight-metric">
                                <span className="metric-label">Base Match Rate</span>
                                <span className="metric-value highlight">64.1%</span>
                            </div>
                            <div className="insight-metric">
                                <span className="metric-label">Age Effect (per year)</span>
                                <span className="metric-value negative">-1.0%</span>
                            </div>
                            <p className="insight-note">Highly significant effect</p>
                        </div>
                    </div>

                    {/* Male with Education */}
                    <div className="insight-card">
                        <div className="insight-header">
                            <span className="insight-icon">👨‍🎓</span>
                            <h3>Male with Education</h3>
                        </div>
                        <div className="insight-body">
                            <div className="insight-metric">
                                <span className="metric-label">Base Match Rate</span>
                                <span className="metric-value">6.2%</span>
                            </div>
                            <div className="insight-metric">
                                <span className="metric-label">Age Effect (per year)</span>
                                <span className="metric-value negative">-0.2%</span>
                            </div>
                            <p className="insight-note">Significant effect</p>
                        </div>
                    </div>

                    {/* Female without Education */}
                    <div className="insight-card insignificant">
                        <div className="insight-header">
                            <span className="insight-icon">👩</span>
                            <h3>Female without Education</h3>
                        </div>
                        <div className="insight-body">
                            <div className="insight-metric">
                                <span className="metric-label">Base Match Rate</span>
                                <span className="metric-value">63.3%</span>
                            </div>
                            <div className="insight-metric">
                                <span className="metric-label">Age Effect (per year)</span>
                                <span className="metric-value negative">-1.1%</span>
                            </div>
                            <p className="insight-note insignificant-note">
                                <span className="asterisk">*</span> Statistically insignificant
                            </p>
                        </div>
                    </div>

                    {/* Male without Education */}
                    <div className="insight-card insignificant">
                        <div className="insight-header">
                            <span className="insight-icon">👨</span>
                            <h3>Male without Education</h3>
                        </div>
                        <div className="insight-body">
                            <div className="insight-metric">
                                <span className="metric-label">Base Match Rate</span>
                                <span className="metric-value">9.8%</span>
                            </div>
                            <div className="insight-metric">
                                <span className="metric-label">Age Effect (per year)</span>
                                <span className="metric-value negative">-0.3%</span>
                            </div>
                            <p className="insight-note insignificant-note">
                                <span className="asterisk">*</span> Statistically insignificant
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default Model2InsightsSection;


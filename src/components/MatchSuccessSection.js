import React from 'react';
import Card from './Card';
import './MatchSuccessSection.css';

function MatchSuccessSection({
  matchRef,
  scrollToSection,
  regressionRef,
  chart7Ref,
  visibleCharts
}) {
  const findings = [
    {
      icon: '👩🏻',
      title: 'Particularly in the youngest group (18–22)',
      description: 'Consistently achieve higher match rates than males'
    },
    {
      icon: '👩🏻',
      title: '33+ age group',
      description: 'Match rates generally decline'
    },
    // {
    //   icon: '🎯',
    //   title: 'High Variance',
    //   description: 'Male users show significant outliers, with some achieving 40-60% match rates'
    // }
  ];

  return (
    <section ref={matchRef} className="section">
      <div className="container">
        <h2 className="section-title">Analysis of Successful Match by Gender and Age Group</h2>
        {/* <p className="section-intro">
          This section examines <strong>which age groups and genders achieve higher match rates</strong> on Tinder.
          By dividing users into five age groups starting at age 18, we can identify patterns in match success.
        </p> */}

        <div className="match-success-layout">
          <div className="boxplot-container" ref={chart7Ref} data-chart-id="chart7">
            <h3 className="chart-title">Plot 5: Match Rate by Age Group and Gender (Box Plot)</h3>
            {/* <p className="chart-description">
              This box plot reveals the distribution and variance in match rates across age groups and gender.
              <strong>Female match rates show high variance</strong> (0.2-0.5 range) with median around 0.35-0.44 for younger ages,
              dropping significantly after 33. <strong>Male match rates are consistently low</strong> (median ~0.02-0.05) with
              tight distributions and notable outliers, showing some males achieve much higher success despite the overall trend.
            </p> */}
            <div className={`chart-wrapper ${visibleCharts.chart7 ? 'visible' : ''}`}>
              {visibleCharts.chart7 && (
                <img
                  src={`${process.env.PUBLIC_URL}/boxplot.png`}
                  alt="Match Rate by Age Group and Gender Box Plot"
                  className="boxplot-image"
                />
              )}
            </div>
          </div>

          <div className="key-findings-cards">
            {findings.map((finding, index) => (
              <Card
                key={index}
                icon={finding.icon}
                title={finding.title}
                description={finding.description}
                variant="gradient"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default MatchSuccessSection;


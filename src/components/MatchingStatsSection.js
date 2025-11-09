import React, { useEffect, useRef, useState } from 'react';
import './MatchingStatsSection.css';

function MatchingStatsSection({ matchingStatsRef, scrollToSection, nextSectionRef }) {
  const [femalePercentage, setFemalePercentage] = useState(0);
  const [malePercentage, setMalePercentage] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 2000;
          const steps = 60;
          const stepDuration = duration / steps;

          const femaleTarget = 40;
          const maleTarget = 4;
          const femaleIncrement = femaleTarget / steps;
          const maleIncrement = maleTarget / steps;

          let currentStep = 0;
          const interval = setInterval(() => {
            currentStep++;
            setFemalePercentage((femaleIncrement * currentStep).toFixed(0));
            setMalePercentage((maleIncrement * currentStep).toFixed(0));

            if (currentStep >= steps) {
              clearInterval(interval);
              setFemalePercentage(femaleTarget.toFixed(0));
              setMalePercentage(maleTarget.toFixed(0));
            }
          }, stepDuration);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section ref={matchingStatsRef} className="section matching-stats-section">
      <div className="container">
        <h2 className="section-title">Matching</h2>
        <p className="section-intro">
          Match rates reveal a significant <strong>gender disparity</strong> in successful connections on Tinder.
        </p>

        <div ref={sectionRef} className="matching-stats-container">
          <div className="gender-stat female-stat">
            <div className="gender-symbol female-symbol">♀</div>
            <div className="gender-percentage female-percentage">{femalePercentage}%</div>
            <div className="gender-label">Female Match Rate</div>
          </div>

          <div className="vs-divider">VS</div>

          <div className="gender-stat male-stat">
            <div className="gender-symbol male-symbol">♂</div>
            <div className="gender-percentage male-percentage">{malePercentage}%</div>
            <div className="gender-label">Male Match Rate</div>
          </div>
        </div>

        <div className="matching-insight">
          <p>
            Females achieve an average match rate of <strong>40%</strong>, nearly <strong>10 times higher</strong> than
            males at <strong>4%</strong>. This disparity reflects fundamental differences in swiping behavior,
            selectivity patterns, and platform dynamics.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MatchingStatsSection;

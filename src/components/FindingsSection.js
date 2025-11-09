import React from 'react';
import Card from './Card';
import './FindingsSection.css';

function FindingsSection({ findingsRef }) {
  const findings = [
    {
      icon: '👥',
      title: 'Gender & Age Impact',
      description: 'Females consistently outperform males in match rates (notably 18–22), with a 20% drop after age 33; males stay below 10% and decline after 38, with women’s rates more age-sensitive.'
    },
    {
      icon: '👆',
      title: 'Swiping Behavior',
      description: 'Females are highly selective (~5% likes), males broad (~40%); 38–42-year-old females slightly increase likes, while males in this group decline.'
    },
    {
      icon: '💬',
      title: 'Messaging Patterns',
      description: 'In messaging, females average more conversations (420 vs. males\' 270) but ghost far more (122 vs. 22).'
    },
    {
      icon: '🎓',
      title: 'Education level',
      description: 'For well-educated females, the 95% confidence predicted match rate will be 64.1%. With the user age increase, the match rate of well educated females will lower down by 1% per year. However, older males will have a smaller gender gap of match rate than younger males'
    }
  ];

  return (
    <section ref={findingsRef} className="section">
      <div className="container">
        <h2 className="section-title">Key Findings & Conclusion</h2>

        <div className="findings-grid-2x2">
          {findings.map((finding, index) => (
            <Card
              key={index}
              icon={finding.icon}
              title={finding.title}
              description={finding.description}
              variant="default"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FindingsSection;


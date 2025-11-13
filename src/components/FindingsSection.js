import React, { useState } from 'react';
import './FindingsSection.css';

function FindingsSection({ findingsRef }) {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCard = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const findings = [
    // {
    //   icon: '👆',
    //   title: 'Swiping Behaviour',
    //   bullets: [
    //     <>Females are highly selective <span className="number-highlight">(~5% likes)</span></>,
    //     <>Males broad <span className="number-highlight">(~40%)</span></>,
    //     <><span className="number-highlight">38–42-year-old</span> females slightly increase likes; males slightly decline</>
    //   ]
    // },
    // {
    //   icon: '💬',
    //   title: 'Messaging Behaviour',
    //   bullets: [
    //     <>Females average more conversations<br /><span className="number-highlight">(420 vs. males' 270)</span></>,
    //     <>Female ghost far more <span className="number-highlight">(122</span> vs. <span className="number-highlight">22)</span></>
    //   ]
    // },
    // {
    //   icon: '👥 🎓',
    //   title: 'Gender, Age & Education',
    //   bullets: [
    //     <>Females consistently outperform males in match rates  <span className="number-highlight">(notably 18–22)</span>, with a <span className="number-highlight">20%</span> drop after <span className="number-highlight"> age 33</span></>,
    //     <>Males stay below <span className="number-highlight">10%</span> slightly decline, with women's rates more age-sensitive</>,
    //     <>From Model 2:</>,
    //     <><strong>Higher-educated females</strong>: Base = <span className="number-highlight">0.641</span>, Every year older: <span className="number-highlight">−1.0%</span> match rate</>,
    //     <><strong>Higher-educated males</strong>: Base = <span className="number-highlight">0.062</span>, Every year older: <span className="number-highlight">−0.2%</span> match rate</>
    //   ]
    // },
    {
      icon: '👩',
      title: 'Female',
      bullets: [
        <>High match rate <span className="number-highlight">(63.3% & 64.1%)</span>, more conversations on average</>,
        <>Highly selective <span className="number-highlight">(~5% likes)</span> between <span className="number-highlight">18-37</span> years old</>,
        <>Every year older: <span className="number-highlight">−1.0%</span> match rate</>,
        <><span className="number-highlight">38-42</span> age group: match rate drops, proportion of swipe likes increases to <span className="number-highlight">14%</span></>
      ]
    },
    {
      icon: '👨',
      title: 'Male',
      bullets: [
        <>Low match rate in all age groups <span className="number-highlight">(stay below 10%)</span></>,
        <>Casting a wide net won't help</>
      ]
    }
  ];

  return (
    <section ref={findingsRef} className="section">
      <div className="container">
        <h2 className="section-title">Key Findings & Implications</h2>

        <div className="findings-grid-flip">
          {findings.map((finding, index) => (
            <div
              key={index}
              className={`flip-card ${flippedCards[index] ? 'flipped' : ''}`}
              onClick={() => toggleCard(index)}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <span className="flip-card-icon">{finding.icon}</span>
                  <h3>{finding.title}</h3>

                </div>
                <div className="flip-card-back">
                  <h3>{finding.title}</h3>
                  <ul>
                    {finding.bullets.map((bullet, bIndex) => {
                      const isModelHeading = typeof bullet === 'object' && bullet.props && bullet.props.children === 'From Model 2:';
                      return (
                        <li key={bIndex} className={isModelHeading ? 'no-bullet' : ''}>
                          {bullet}
                        </li>
                      );
                    })}
                  </ul>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FindingsSection;


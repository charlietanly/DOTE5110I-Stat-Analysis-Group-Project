import React from 'react';
import './Navbar.css';

function Navbar({ activeSection, scrollToSection, refs }) {
  const {
    introRef,
    dataRef,
    behaviorRef,
    behaviorRef2,
    behaviorRef3,
    swipeSplitRef,
    messagingSplitRef,
    matchingStatsRef,
    matchRef,
    modelDefRef,
    regressionRef,
    model2InsightsRef,
    findingsRef
  } = refs;
  // Section order for next button
  const sectionRefs = [
    introRef,
    dataRef,
    behaviorRef,
    swipeSplitRef,
    behaviorRef2,
    messagingSplitRef,
    behaviorRef3,
    matchingStatsRef,
    matchRef,
    modelDefRef,
    regressionRef,
    model2InsightsRef,
    findingsRef
  ];

  const sectionIds = [
    'intro',
    'data',
    'behavior',
    'swipe-split',
    'behavior2',
    'messaging-split',
    'behavior3',
    'matching',
    'match',
    'model-def',
    'regression',
    'model2-insights',
    'findings'
  ];
  const scrollToNext = () => {
    const currentIndex = sectionIds.indexOf(activeSection);
    if (currentIndex < sectionRefs.length - 1) {
      const nextSectionId = sectionIds[currentIndex + 1];
      const shouldCenter = nextSectionId === 'swipe-split' || nextSectionId === 'messaging-split';
      scrollToSection(sectionRefs[currentIndex + 1], shouldCenter);
    }
  };

  return (
    <nav className="fixed-navbar">
      <ul className="nav-list">
        <li className={activeSection === 'intro' ? 'active' : ''}>
          <a href="#intro" onClick={(e) => { e.preventDefault(); scrollToSection(introRef); }}>Intro</a>
        </li>
        <li className={activeSection === 'data' ? 'active' : ''}>
          <a href="#data" onClick={(e) => { e.preventDefault(); scrollToSection(dataRef); }}>Data Prep</a>
        </li>
        <li className={activeSection === 'behavior' ? 'active' : ''}>
          <a href="#behavior" onClick={(e) => { e.preventDefault(); scrollToSection(behaviorRef); }}>Behavior</a>
        </li>
        <li className={activeSection === 'swipe-split' ? 'active' : ''}>
          <a href="#swipe-split" onClick={(e) => { e.preventDefault(); scrollToSection(swipeSplitRef, true); }}>Swiping</a>
        </li>
        <li className={activeSection === 'messaging-split' ? 'active' : ''}>
          <a href="#messaging-split" onClick={(e) => { e.preventDefault(); scrollToSection(messagingSplitRef, true); }}>Messaging</a>
        </li>
        <li className={activeSection === 'matching' ? 'active' : ''}>
          <a href="#matching" onClick={(e) => { e.preventDefault(); scrollToSection(matchingStatsRef); }}>Matching</a>
        </li>
        <li className={activeSection === 'match' ? 'active' : ''}>
          <a href="#match" onClick={(e) => { e.preventDefault(); scrollToSection(matchRef); }}>Match Success</a>
        </li>
        <li className={activeSection === 'model-def' ? 'active' : ''}>
          <a href="#model-def" onClick={(e) => { e.preventDefault(); scrollToSection(modelDefRef); }}>Models</a>
        </li>
        <li className={activeSection === 'regression' ? 'active' : ''}>
          <a href="#regression" onClick={(e) => { e.preventDefault(); scrollToSection(regressionRef); }}>Regression</a>
        </li>
        <li className={activeSection === 'model2-insights' ? 'active' : ''}>
          <a href="#model2-insights" onClick={(e) => { e.preventDefault(); scrollToSection(model2InsightsRef); }}>Insights</a>
        </li>
        <li className={activeSection === 'findings' ? 'active' : ''}>
          <a href="#findings" onClick={(e) => { e.preventDefault(); scrollToSection(findingsRef); }}>Findings</a>
        </li>
      </ul>
      <button className="next-section-btn" onClick={scrollToNext} title="Scroll to next section">
        ↓
      </button>
    </nav>
  );
}

export default Navbar;


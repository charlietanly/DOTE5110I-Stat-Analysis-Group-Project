import React from 'react';
import './Navbar.css';

function Navbar({ activeSection, scrollToSection, refs }) {
  const {
    introRef,
    dataRef,
    behaviorRef,
    behaviorRef2,      // ✅ Add this
    behaviorRef3,      // ✅ Add this
    swipeSplitRef,
    messagingSplitRef,
    matchingStatsRef,
    matchRef,
    regressionRef,
    findingsRef
  } = refs;
  // Section order for next button
  const sectionRefs = [
    introRef,
    dataRef,
    behaviorRef,
    swipeSplitRef,
    behaviorRef2,      // ✅ Add this (after swipeSplitRef)
    messagingSplitRef,
    behaviorRef3,      // ✅ Add this (after messagingSplitRef)
    matchingStatsRef,
    matchRef,
    regressionRef,
    findingsRef
  ];

  const sectionIds = [
    'intro',
    'data',
    'behavior',
    'swipe-split',
    'behavior2',       // ✅ Add this
    'messaging-split',
    'behavior3',       // ✅ Add this
    'matching',
    'match',
    'regression',
    'findings'
  ];
  const scrollToNext = () => {
    const currentIndex = sectionIds.indexOf(activeSection);
    if (currentIndex < sectionRefs.length - 1) {
      scrollToSection(sectionRefs[currentIndex + 1]);
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
          <a href="#swipe-split" onClick={(e) => { e.preventDefault(); scrollToSection(swipeSplitRef); }}>Swiping</a>
        </li>
        <li className={activeSection === 'messaging-split' ? 'active' : ''}>
          <a href="#messaging-split" onClick={(e) => { e.preventDefault(); scrollToSection(messagingSplitRef); }}>Messaging</a>
        </li>
        <li className={activeSection === 'matching' ? 'active' : ''}>
          <a href="#matching" onClick={(e) => { e.preventDefault(); scrollToSection(matchingStatsRef); }}>Matching</a>
        </li>
        <li className={activeSection === 'match' ? 'active' : ''}>
          <a href="#match" onClick={(e) => { e.preventDefault(); scrollToSection(matchRef); }}>Match Success</a>
        </li>
        <li className={activeSection === 'regression' ? 'active' : ''}>
          <a href="#regression" onClick={(e) => { e.preventDefault(); scrollToSection(regressionRef); }}>Regression</a>
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


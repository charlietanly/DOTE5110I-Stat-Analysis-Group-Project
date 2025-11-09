import React from 'react';
import './SwipeBehaviorSection.css';
import SwipingMessagingDiagram from './SwipingMessagingDiagram';

function SwipeBehaviorSection({
  sectionRef,
  mode = 'interactive',
  showNextButton = false,
  scrollToSection,
  nextSectionRef
}) {
  // Determine which version to show based on mode
  const renderDiagram = () => {
    switch (mode) {
      case 'interactive':
        return <SwipingMessagingDiagram />;
      case 'messaging-only':
        return <SwipingMessagingDiagram highlightOnly="messaging" />;
      case 'matching-only':
        return (
          <div className="matching-highlight-container">
            <SwipingMessagingDiagram highlightOnly="matching" />
          </div>
        );
      default:
        return <SwipingMessagingDiagram />;
    }
  };

  return (
    <section ref={sectionRef} className="">
      <div className="">
        {/* <h2 className="section-title">User Behavior Analysis</h2> */}
        {renderDiagram()}
      </div>
    </section>
  );
}

export default SwipeBehaviorSection;


import React from 'react';
import './ConceptDiagram.css';

function ConceptDiagram() {
  return (
    <div className="concept-diagram">
      <div className="concept-title">Exploring usage behaviours</div>
      <div className="concept-flow">
        <div className="concept-circle concept-circle-left">
          <div className="concept-icon">👆</div>
          <div className="concept-label">Swiping</div>
        </div>
        <div className="concept-connector">
          <div className="connector-label">Matching</div>
        </div>
        <div className="concept-circle concept-circle-right">
          <div className="concept-icon">💬</div>
          <div className="concept-label">Messaging</div>
        </div>
      </div>
    </div>
  );
}

export default ConceptDiagram;


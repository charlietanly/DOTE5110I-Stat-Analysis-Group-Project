import React, { useState } from 'react';
import './SwipingMessagingDiagram.css';

function SwipingMessagingDiagram({ highlightOnly }) {
    const [swipingActive, setSwipingActive] = useState(true);
    const [messagingActive, setMessagingActive] = useState(true);

    // If highlightOnly is provided, use the dimmed version (non-interactive)
    if (highlightOnly) {
        return (
            <div className="swiping-messaging-diagram swiping-messaging-diagram-large">
                <div className="diagram-title">Exploring usage behaviours</div>
                <div className="diagram-flow diagram-flow-spaced">
                    <div className={`diagram-circle diagram-circle-left ${highlightOnly !== 'swiping' ? 'diagram-dimmed' : ''}`}>
                        <div className="diagram-icon">👆</div>
                        <div className="diagram-label">Swiping</div>
                    </div>
                    <div className={`diagram-connector diagram-connector-arrow ${highlightOnly !== 'matching' ? 'diagram-dimmed' : ''}`}>
                        <div className="arrow-left">←</div>
                        <div className="connector-label">Matching</div>
                        <div className="arrow-right">→</div>
                    </div>
                    <div className={`diagram-circle diagram-circle-right ${highlightOnly !== 'messaging' ? 'diagram-dimmed' : ''}`}>
                        <div className="diagram-icon">💬</div>
                        <div className="diagram-label">Messaging</div>
                    </div>
                </div>
            </div>
        );
    }

    // Interactive version
    const handleSwipingClick = () => {
        // When clicking swiping, toggle messaging state only
        // Keep swiping active, toggle messaging
        setMessagingActive(!messagingActive);
    };

    const handleMessagingClick = () => {
        // When clicking messaging, toggle swiping state only
        // Keep messaging active, toggle swiping
        setSwipingActive(!swipingActive);
    };

    const matchingActive = swipingActive && messagingActive;

    return (
        <div className="swiping-messaging-diagram swiping-messaging-diagram-large">
            <div className="diagram-title">Exploring usage behaviours</div>
            <div className="diagram-flow diagram-flow-spaced">
                <div
                    className={`diagram-circle diagram-circle-left diagram-circle-clickable ${!swipingActive ? 'diagram-dimmed' : ''}`}
                    onClick={handleSwipingClick}
                >
                    <div className="diagram-icon">👆</div>
                    <div className="diagram-label">Swiping</div>
                </div>
                <div className={`diagram-connector diagram-connector-arrow ${!matchingActive ? 'diagram-dimmed' : ''}`}>
                    <div className="arrow-left">←</div>
                    <div className="connector-label">Matching</div>
                    <div className="arrow-right">→</div>
                </div>
                <div
                    className={`diagram-circle diagram-circle-right diagram-circle-clickable ${!messagingActive ? 'diagram-dimmed' : ''}`}
                    onClick={handleMessagingClick}
                >
                    <div className="diagram-icon">💬</div>
                    <div className="diagram-label">Messaging</div>
                </div>
            </div>

        </div>
    );
}

export default SwipingMessagingDiagram;


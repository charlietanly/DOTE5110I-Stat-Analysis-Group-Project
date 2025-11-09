import React from 'react';
import Chart from 'react-apexcharts';
import './MessagingBehaviorSection.css';
import SwipingOnlyDiagram from './SwipingOnlyDiagram';

function MessagingBehaviorSection({
  messagingRef,
  scrollToSection,
  matchRef,
  chart4Ref,
  chart5Ref,
  visibleCharts,
  conversationsOptions,
  conversationsSeries,
  ghostingOptions,
  ghostingSeries
}) {
  return (
    <section ref={messagingRef} className="section section-alt">
      <div className="container">
        <h2 className="section-title">Messaging Behavior</h2>

        {/* Swiping Only Diagram */}
        <SwipingOnlyDiagram />

        <p className="section-intro">
          Following the initial swipe, this section investigates the messaging behavior that occurs after a match is made.
          We analyze 2 key metrics: <strong>average conversations</strong> and <strong>average ghostings</strong>
          (discontinuing conversation after first message).
        </p>

        <div className="chart-card" ref={chart5Ref} data-chart-id="chart5">
          <h3 className="chart-title">Plot 3: Average Number of Conversations</h3>
          {/* <p className="chart-description">
            Females are involved in a significantly higher average number of conversations, at approximately <strong>420</strong>.
            Males participate in a lower average number of conversations, at approximately <strong>270</strong>.
          </p> */}
          <div className={`chart-wrapper ${visibleCharts.chart5 ? 'visible' : ''}`}>
            {visibleCharts.chart5 && (
              <Chart
                key="chart5-animated"
                options={conversationsOptions}
                series={conversationsSeries}
                type="bar"
                height={400}
              />
            )}
          </div>
        </div>

        <div className="chart-card" ref={chart4Ref} data-chart-id="chart4">
          <h3 className="chart-title">Plot 4: Average Number of Ghostings After 1st Message</h3>
          <p className="chart-description">
            This chart reveals a stark difference in ghosting behavior. Females have a very high average number of ghostings,
            at approximately <strong>122</strong>. In contrast, males have a very low average, at approximately <strong>22</strong>.
          </p>
          <div className={`chart-wrapper ${visibleCharts.chart4 ? 'visible' : ''}`}>
            {visibleCharts.chart4 && (
              <Chart
                key="chart4-animated"
                options={ghostingOptions}
                series={ghostingSeries}
                type="bar"
                height={400}
              />
            )}
          </div>
        </div>

        <div className="insight-box">
          <strong>Key Insight:</strong> The dynamic of <strong>high female selectivity and high male volume</strong> continues into
          the messaging phase. Females shoulder a greater communication load, managing significantly more conversations, which implies
          they successfully convert matches into engagement at a higher rate. However, as a direct consequence, females also "ghost"
          at a much higher rate. This behavior may imply a necessary filtering strategy for females to manage the high volume of
          incoming interest.
        </div>

        <button className="next-button" onClick={() => scrollToSection(matchRef)}>
          Next: Match Success Analysis ↓
        </button>
      </div>
    </section>
  );
}

export default MessagingBehaviorSection;


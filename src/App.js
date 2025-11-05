import React, { useState, useEffect, useRef } from 'react';
import Chart from 'react-apexcharts';
import './App.css';

function App() {
  // State to track which charts are visible
  const [visibleCharts, setVisibleCharts] = useState({
    chart1: false,
    chart2: false,
    chart3: false,
    chart4: false,
    chart5: false
  });

  // Refs for each section
  const introRef = useRef(null);
  const dataRef = useRef(null);
  const swipeRef = useRef(null);
  const messagingRef = useRef(null);
  const matchRef = useRef(null);
  const regressionRef = useRef(null);
  const findingsRef = useRef(null);

  // Refs for each chart
  const chart1Ref = useRef(null);
  const chart2Ref = useRef(null);
  const chart3Ref = useRef(null);
  const chart4Ref = useRef(null);
  const chart5Ref = useRef(null);

  // Smooth scroll to section function
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Intersection Observer setup
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-50px'
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const chartId = entry.target.getAttribute('data-chart-id');
          setTimeout(() => {
            setVisibleCharts((prev) => ({ ...prev, [chartId]: true }));
          }, 100);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const refs = [chart1Ref, chart2Ref, chart3Ref, chart4Ref, chart5Ref];
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  // Chart configurations (keeping existing chart options)
  const matchRateByAgeOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 1500,
        animateGradually: { enabled: true, delay: 200 },
        dynamicAnimation: { enabled: true, speed: 500 }
      }
    },
    colors: ['#FD2B7B'],
    plotOptions: { bar: { borderRadius: 8, dataLabels: { position: 'top' } } },
    dataLabels: {
      enabled: true,
      formatter: (val) => val.toFixed(3),
      offsetY: -20,
      style: { fontSize: '12px', colors: ['#424242'] }
    },
    xaxis: {
      categories: ['18-30', '18-40', '30-40', '30-50', '40-50', '>50', 'Others'],
      labels: { style: { colors: '#424242', fontSize: '12px' } }
    },
    yaxis: {
      title: { text: 'Match Rate', style: { color: '#424242' } },
      labels: { style: { colors: '#424242' } }
    },
    title: {
      text: 'Match Rate Distribution by Age Filter Group',
      align: 'center',
      style: { fontSize: '18px', fontWeight: 'bold', color: '#424242' }
    },
    grid: { borderColor: '#f1f1f1' }
  };

  const matchRateByAgeSeries = [{
    name: 'Match Rate',
    data: [0.342, 0.315, 0.298, 0.285, 0.312, 0.290, 0.305]
  }];

  const swipeComparisonOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 1500,
        animateGradually: { enabled: true, delay: 200 }
      }
    },
    colors: ['#FD2B7B', '#424242'],
    plotOptions: { bar: { horizontal: false, columnWidth: '55%', borderRadius: 6 } },
    dataLabels: {
      enabled: true,
      formatter: (val) => val.toFixed(0),
      style: { colors: ['#fff'] }
    },
    stroke: { show: true, width: 2, colors: ['transparent'] },
    xaxis: {
      categories: ['Female', 'Male'],
      labels: { style: { colors: '#424242', fontSize: '14px' } }
    },
    yaxis: {
      title: { text: 'Average Count', style: { color: '#424242' } },
      labels: { style: { colors: '#424242' } }
    },
    title: {
      text: 'Average Swipe Likes vs Passes by Gender',
      align: 'center',
      style: { fontSize: '18px', fontWeight: 'bold', color: '#424242' }
    },
    legend: { position: 'top', horizontalAlign: 'center' },
    fill: { opacity: 1 },
    tooltip: { y: { formatter: (val) => val.toFixed(0) + ' swipes' } }
  };

  const swipeComparisonSeries = [
    { name: 'Swipe Likes', data: [3245, 4892] },
    { name: 'Swipe Passes', data: [2156, 3421] }
  ];

  const swipePercentageOptions = {
    chart: {
      type: 'bar',
      stacked: true,
      stackType: '100%',
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 1500,
        animateGradually: { enabled: true, delay: 200 }
      }
    },
    colors: ['#FD2B7B', '#424242'],
    plotOptions: { bar: { horizontal: false, borderRadius: 6 } },
    dataLabels: {
      enabled: true,
      formatter: (val) => val.toFixed(1) + '%',
      style: { colors: ['#fff'], fontSize: '12px' }
    },
    xaxis: {
      categories: ['Female', 'Male'],
      labels: { style: { colors: '#424242', fontSize: '14px' } }
    },
    yaxis: {
      title: { text: 'Percentage of Total Swipes (%)', style: { color: '#424242' } },
      labels: { style: { colors: '#424242' } }
    },
    title: {
      text: '100% Stacked Proportion of Swipe Behavior by Gender',
      align: 'center',
      style: { fontSize: '18px', fontWeight: 'bold', color: '#424242' }
    },
    legend: { position: 'top', horizontalAlign: 'center' },
    fill: { opacity: 1 },
    tooltip: { y: { formatter: (val) => val.toFixed(1) + '%' } }
  };

  const swipePercentageSeries = [
    { name: 'Swipe Likes', data: [60.1, 58.8] },
    { name: 'Swipe Passes', data: [39.9, 41.2] }
  ];

  const ghostingOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 1500,
        animateGradually: { enabled: true, delay: 200 }
      }
    },
    colors: ['#FF7158'],
    plotOptions: { bar: { borderRadius: 8, dataLabels: { position: 'top' } } },
    dataLabels: {
      enabled: true,
      formatter: (val) => val.toFixed(1),
      offsetY: -20,
      style: { fontSize: '12px', colors: ['#424242'] }
    },
    xaxis: {
      categories: ['Female', 'Male'],
      labels: { style: { colors: '#424242', fontSize: '14px' } }
    },
    yaxis: {
      title: { text: 'Average Number of Ghostings', style: { color: '#424242' } },
      labels: { style: { colors: '#424242' } }
    },
    title: {
      text: 'Average Ghostings After Initial Message by Gender',
      align: 'center',
      style: { fontSize: '18px', fontWeight: 'bold', color: '#424242' }
    },
    grid: { borderColor: '#f1f1f1' }
  };

  const ghostingSeries = [{ name: 'Ghostings', data: [12.4, 8.7] }];

  const conversationsOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 1500,
        animateGradually: { enabled: true, delay: 200 }
      }
    },
    colors: ['#FF7158'],
    plotOptions: { bar: { borderRadius: 8, dataLabels: { position: 'top' } } },
    dataLabels: {
      enabled: true,
      formatter: (val) => val.toFixed(1),
      offsetY: -20,
      style: { fontSize: '12px', colors: ['#424242'] }
    },
    xaxis: {
      categories: ['Female', 'Male'],
      labels: { style: { colors: '#424242', fontSize: '14px' } }
    },
    yaxis: {
      title: { text: 'Average Number of Conversations', style: { color: '#424242' } },
      labels: { style: { colors: '#424242' } }
    },
    title: {
      text: 'Average Number of Conversations by Gender',
      align: 'center',
      style: { fontSize: '18px', fontWeight: 'bold', color: '#424242' }
    },
    grid: { borderColor: '#f1f1f1' }
  };

  const conversationsSeries = [{ name: 'Conversations', data: [24.3, 18.9] }];

  return (
    <div className="App">
      {/* Hero Section */}
      <section ref={introRef} className="section hero-section">
        <div className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Analysis of Tinder Profile Attributes and User Activity</h1>
            <p className="hero-subtitle">DOTE 5110 Statistical Analysis - Group 7</p>
            <div className="group-members">
              <p>KWOK Tsz Him | CHUI Yin Tung Chimney | LIN Bei</p>
              <p>TAN Lee Yan | TSANG Heung Chuen</p>
            </div>
          </div>
          <button className="next-button" onClick={() => scrollToSection(dataRef)}>
            Next Section ↓
          </button>
        </div>
      </section>

      {/* Introduction & Data Preparation */}
      <section ref={dataRef} className="section section-alt">
        <div className="container">
          <h2 className="section-title">Project Introduction</h2>
          <div className="content-block">
            <p className="intro-text">
              In hyper-dense, high-pressure Hong Kong, young adults increasingly rely on dating apps yet struggle to form meaningful connections. 
              This study leverages Tinder behavioral data to uncover structural and behavioral barriers to matching, using exploratory data 
              analysis (EDA), regression modeling, and predictive insights to propose actionable interventions for improving romantic success.
            </p>
          </div>

          <h3 className="subsection-title">Research Proposal & Data Preparation</h3>
          <div className="methodology">
            <h4>Research Goal</h4>
            <p>Identify behavioral and demographic factors that influence Tinder user engagement</p>

            <h4>Data Pre-Processing</h4>
            <ul>
              <li><strong>Basic Cleaning:</strong> Checked for null values (none found)</li>
              <li><strong>Data Removal:</strong> Removed inactive users, zero behavioral activity, and ages outside 18-65 range</li>
              <li><strong>Feature Engineering:</strong> Created match_rate variable (dependent variable = matches / swipe_likes)</li>
            </ul>

            <h4>Dataset Summary</h4>
            <div className="stats-grid-small">
              <div className="stat-item">
                <strong>Original Size:</strong> 1,209 users × 31 columns
              </div>
              <div className="stat-item">
                <strong>Final Size:</strong> 952 users × 32 columns
              </div>
              <div className="stat-item">
                <strong>Removed:</strong> 257 inactive/invalid users
              </div>
            </div>
          </div>

          <button className="next-button" onClick={() => scrollToSection(swipeRef)}>
            Next: Swipe Behavior Analysis ↓
          </button>
        </div>
      </section>

      {/* EDA Part 1: Swipe Behavior */}
      <section ref={swipeRef} className="section">
        <div className="container">
          <h2 className="section-title">Analysis of Swiping Behavior by Gender</h2>
          <p className="section-intro">
            To understand how swiping strategies differ between genders, we analyzed swipe activity from 2 complementary perspectives: 
            <strong> volume</strong> (average counts) and <strong>selectivity</strong> (proportional breakdown).
          </p>

          <div className="chart-card" ref={chart2Ref} data-chart-id="chart2">
            <h3 className="chart-title">Plot 1: Average Number of Swipe Likes & Passes</h3>
            <p className="chart-description">
              This chart shows the <strong>absolute average</strong> counts of swipes. Females have a very low average of swipe likes 
              (approx. 250) but a very high average of swipe passes (over 5,000). Males average significantly more swipe likes 
              (approx 2,000) and fewer swipe passes (approx 30,000).
            </p>
            <div className={`chart-wrapper ${visibleCharts.chart2 ? 'visible' : ''}`}>
              {visibleCharts.chart2 && (
                <Chart
                  key="chart2-animated"
                  options={swipeComparisonOptions}
                  series={swipeComparisonSeries}
                  type="bar"
                  height={400}
                />
              )}
            </div>
          </div>

          <div className="chart-card" ref={chart3Ref} data-chart-id="chart3">
            <h3 className="chart-title">Plot 2: 100% Stacked Proportion of Swipe Behavior</h3>
            <p className="chart-description">
              This chart illustrates the <strong>proportional breakdown</strong> of swipe types. For females, swipe likes are a very 
              small fraction (approx. 5%) of their total activity. For males, swipe likes account for a much larger portion 
              (approx. 40%) of their total swipes.
            </p>
            <div className={`chart-wrapper ${visibleCharts.chart3 ? 'visible' : ''}`}>
              {visibleCharts.chart3 && (
                <Chart
                  key="chart3-animated"
                  options={swipePercentageOptions}
                  series={swipePercentageSeries}
                  type="bar"
                  height={400}
                />
              )}
            </div>
          </div>

          <div className="insight-box">
            <strong>Key Insight:</strong> The data clearly shows that <strong>females are significantly more selective</strong>, 
            "passing" on the vast majority of profiles they encounter. Conversely, males employ a much broader "liking" strategy, 
            liking a substantially higher number and proportion of profiles compared to females.
          </div>

          <button className="next-button" onClick={() => scrollToSection(messagingRef)}>
            Next: Messaging Behavior Analysis ↓
          </button>
        </div>
      </section>

      {/* EDA Part 2: Messaging Behavior */}
      <section ref={messagingRef} className="section section-alt">
        <div className="container">
          <h2 className="section-title">Analysis of Messaging Behavior by Gender</h2>
          <p className="section-intro">
            Following the initial swipe, this section investigates the messaging behavior that occurs after a match is made. 
            We analyze 2 key metrics: <strong>average conversations</strong> and <strong>average ghostings</strong> 
            (discontinuing conversation after first message).
          </p>

          <div className="chart-card" ref={chart5Ref} data-chart-id="chart5">
            <h3 className="chart-title">Plot 3: Average Number of Conversations</h3>
            <p className="chart-description">
              Females are involved in a significantly higher average number of conversations, at approximately <strong>420</strong>. 
              Males participate in a lower average number of conversations, at approximately <strong>270</strong>.
            </p>
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

      {/* EDA Part 3: Match Success */}
      <section ref={matchRef} className="section">
        <div className="container">
          <h2 className="section-title">Analysis of Successful Match by Gender and Age Group</h2>
          <p className="section-intro">
            This section examines <strong>which age groups and genders achieve higher match rates</strong> on Tinder. 
            By dividing users into five age groups starting at age 18, we can identify patterns in match success.
          </p>

          <div className="chart-card" ref={chart1Ref} data-chart-id="chart1">
            <h3 className="chart-title">Plot 5: Average Match Rate of Age Groups by Gender</h3>
            <p className="chart-description">
              Starting at age 18, females consistently achieve significantly higher match rates than males, with data presented 
              in five-year age intervals. <strong>For females, the match rate drops sharply by about 20% after age 33</strong>. 
              In contrast, males maintain a match rate below 10% across all age groups.
            </p>
            <div className={`chart-wrapper ${visibleCharts.chart1 ? 'visible' : ''}`}>
              {visibleCharts.chart1 && (
                <Chart
                  key="chart1-animated"
                  options={matchRateByAgeOptions}
                  series={matchRateByAgeSeries}
                  type="bar"
                  height={400}
                />
              )}
            </div>
          </div>

          <div className="insight-box">
            <strong>Key Findings:</strong>
            <ul>
              <li>Females consistently have <strong>higher match rates than males</strong>—particularly in the youngest group (ages 18–22)</li>
              <li>As age increases, match rates tend to decline, with a noticeable drop after <strong>age 33 for females</strong> and <strong>age 38 for males</strong></li>
              <li>The decline in female match rates after age 33 likely reflects a shift in relationship goals toward marriage-minded intentions</li>
              <li>Male match rates remain low across all age groups and drop further after age 37</li>
              <li>Correlation: <strong>-0.2183</strong> for females, <strong>-0.0553</strong> for males</li>
              <li>This trend highlights <strong>a growing mismatch and complex dating environment for users over 30</strong></li>
            </ul>
          </div>

          <button className="next-button" onClick={() => scrollToSection(regressionRef)}>
            Next: Regression Analysis ↓
          </button>
        </div>
      </section>

      {/* Regression Analysis */}
      <section ref={regressionRef} className="section section-alt">
        <div className="container">
          <h2 className="section-title">Regression Analysis & Prediction Model</h2>
          <p className="section-intro">
            Based on the EDA findings, we developed regression models to predict match rate using demographic data, 
            swiping behavior, and messaging behavior.
          </p>

          <div className="methodology">
            <h3>Model Definitions</h3>
            <div className="model-equations">
              <p><strong>Model 1:</strong> match_rate ~ user_age + gender + education</p>
              <p><strong>Model 2:</strong> match_rate ~ user_age + gender + education + swipe_likes + swipe_passes + ageFilterMin + ageFilterMax</p>
              <p><strong>Model 3:</strong> match_rate ~ user_age + gender + education + swipe_likes + swipe_passes + ageFilterMin + ageFilterMax + no_of_msgs_sent + no_of_msgs_received + nrOfConversations + longestConversation + percentOfOneMessageConversations</p>
            </div>

            <h3>Model Performance Comparison</h3>
            <div className="table-wrapper">
              <table className="results-table">
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>R-squared</th>
                    <th>Adj. R-squared</th>
                    <th>Residual Error</th>
                    <th>Interpretation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Model 1</td>
                    <td>0.678</td>
                    <td>High</td>
                    <td>Higher</td>
                    <td>Demographics are powerful predictors</td>
                  </tr>
                  <tr>
                    <td>Model 2</td>
                    <td>0.682</td>
                    <td>Higher</td>
                    <td>Medium</td>
                    <td>+0.4% improvement with swipe behavior</td>
                  </tr>
                  <tr className="highlight-row">
                    <td>Model 3</td>
                    <td>0.706</td>
                    <td>Highest</td>
                    <td>Lowest</td>
                    <td><strong>BEST MODEL</strong> - +2.4% with messaging data</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Model Validation Results</h3>
            <div className="table-wrapper">
              <table className="results-table">
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>RMSE (Test)</th>
                    <th>R-squared (Test)</th>
                    <th>BIC</th>
                    <th>Overfitting Gap</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Model 1</td>
                    <td>0.0145</td>
                    <td>0.672</td>
                    <td>-5892</td>
                    <td>0.0008 (minimal)</td>
                  </tr>
                  <tr>
                    <td>Model 2</td>
                    <td>0.0142</td>
                    <td>0.680</td>
                    <td>-5901</td>
                    <td>0.0015</td>
                  </tr>
                  <tr className="highlight-row">
                    <td>Model 3</td>
                    <td><strong>0.0138</strong></td>
                    <td><strong>0.704</strong></td>
                    <td>-5897</td>
                    <td>0.0030 (small)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="model-conclusion">
              <strong>Conclusion:</strong> Model 3 is the superior model with the lowest RMSE and highest R-squared on test data. 
              While it shows a small trend of overfitting (gap of 0.0030), the performance gains justify the added complexity. 
              The results demonstrate that: <strong>who you are matters most</strong> (demographics), <strong>how selective you are 
              has minor impact</strong> (swipe behavior), and <strong>how you engage in conversations matters significantly</strong> 
              (messaging behavior).
            </p>
          </div>

          <button className="next-button" onClick={() => scrollToSection(findingsRef)}>
            Next: Key Findings & Conclusion ↓
          </button>
        </div>
      </section>

      {/* Key Findings & Conclusion */}
      <section ref={findingsRef} className="section">
        <div className="container">
          <h2 className="section-title">Key Findings & Conclusion</h2>
          
          <div className="findings-grid">
            <div className="finding-card">
              <div className="finding-icon">👥</div>
              <h3>Gender & Age Impact</h3>
              <p>
                <strong>Females consistently outperform males</strong> in match rates (notably ages 18–22), with a 20% drop post-33. 
                Males stay below 10% and decline after 38. Holding other factors constant, <strong>males have a 33.7% lower match 
                rate than females</strong>.
              </p>
            </div>

            <div className="finding-card">
              <div className="finding-icon">👆</div>
              <h3>Swiping Behavior</h3>
              <p>
                Swiping differs starkly: <strong>females are highly selective (~5% likes)</strong>, while 
                <strong>males cast a broader net (~40% likes)</strong>. Interestingly, 38–42-year-old females slightly 
                increase likes, while males in this group decline.
              </p>
            </div>

            <div className="finding-card">
              <div className="finding-icon">💬</div>
              <h3>Messaging Patterns</h3>
              <p>
                In messaging, <strong>females average more conversations (420 vs. males' 270)</strong> but ghost far more 
                <strong>(122 vs. 22)</strong>. This reflects their need to filter high incoming interest volumes.
              </p>
            </div>

            <div className="finding-card">
              <div className="finding-icon">📊</div>
              <h3>Predictive Model Success</h3>
              <p>
                Our Model 3 achieved <strong>70.4% accuracy</strong> in predicting match rates. Demographics matter most (67.8%), 
                with messaging behavior adding significant value (+2.4%), while swipe selectivity has minimal impact (+0.4%).
              </p>
            </div>
          </div>

          <div className="conclusion-box">
            <h3>Limitations & Future Work</h3>
            <p>
              <strong>Gender imbalance in the dataset:</strong> The dataset contains only 200 female rows, creating a significant 
              imbalance. While we attempted SMOTE and Bootstrap resampling to generate 600 additional female samples for balance, 
              <strong>both methods distorted key data features</strong>. Therefore, addressing this imbalance remains on our 
              future work agenda.
            </p>
          </div>

          <div className="thank-you">
            <h2>Thank You!</h2>
            <p className="group-label">Group 7</p>
            <div className="group-members-final">
              <p>KWOK Tsz Him (1155088739)</p>
              <p>CHUI Yin Tung Chimney (1155244154)</p>
              <p>LIN Bei (1155245080)</p>
              <p>TAN Lee Yan (1155245076)</p>
              <p>TSANG Heung Chuen (1155241248)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            <strong>Data Source:</strong> Tinder Dataset from Kaggle - 
            <a href="https://www.kaggle.com/datasets/ashleyxu98/tinder" target="_blank" rel="noopener noreferrer">
              https://www.kaggle.com/datasets/ashleyxu98/tinder
            </a>
          </p>
          <p className="footer-text">
            <strong>Course:</strong> DOTE 5110 Statistical Analysis | <strong>Year:</strong> 2025
          </p>
          <p className="footer-note">
            This analysis is for educational purposes as part of a statistical analysis group project.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

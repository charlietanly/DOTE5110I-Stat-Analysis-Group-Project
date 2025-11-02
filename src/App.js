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

  // Refs for each chart
  const chart1Ref = useRef(null);
  const chart2Ref = useRef(null);
  const chart3Ref = useRef(null);
  const chart4Ref = useRef(null);
  const chart5Ref = useRef(null);

  // Intersection Observer setup
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2, // Trigger when 20% of the chart is visible
      rootMargin: '0px'
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const chartId = entry.target.getAttribute('data-chart-id');
          setVisibleCharts((prev) => ({ ...prev, [chartId]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all chart refs
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
  // Dataset Overview Statistics
  const datasetStats = {
    totalUsers: 1194,
    originalUsers: 1209,
    cleanedUsers: 1194,
    ageRange: '18-65',
    matchRateAvg: 0.3245
  };

  // Chart 1: Match Rate by Age Filter Group
  const matchRateByAgeOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 1200,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      }
    },
    colors: ['#FD2B7B'],
    plotOptions: {
      bar: {
        borderRadius: 8,
        dataLabels: { position: 'top' }
      }
    },
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

  // Chart 2: Average Swipe Likes vs Passes by Gender
  const swipeComparisonOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 1200,
        animateGradually: {
          enabled: true,
          delay: 150
        }
      }
    },
    colors: ['#FD2B7B', '#424242'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 6
      }
    },
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
    legend: {
      position: 'top',
      horizontalAlign: 'center'
    },
    fill: { opacity: 1 },
    tooltip: {
      y: { formatter: (val) => val.toFixed(0) + ' swipes' }
    }
  };

  const swipeComparisonSeries = [
    {
      name: 'Swipe Likes',
      data: [3245, 4892]
    },
    {
      name: 'Swipe Passes',
      data: [2156, 3421]
    }
  ];

  // Chart 3: Stacked Percentage of Swipe Behavior
  const swipePercentageOptions = {
    chart: {
      type: 'bar',
      stacked: true,
      stackType: '100%',
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 1200,
        animateGradually: {
          enabled: true,
          delay: 150
        }
      }
    },
    colors: ['#FD2B7B', '#424242'],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 6
      }
    },
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
    legend: {
      position: 'top',
      horizontalAlign: 'center'
    },
    fill: { opacity: 1 },
    tooltip: {
      y: { formatter: (val) => val.toFixed(1) + '%' }
    }
  };

  const swipePercentageSeries = [
    {
      name: 'Swipe Likes',
      data: [60.1, 58.8]
    },
    {
      name: 'Swipe Passes',
      data: [39.9, 41.2]
    }
  ];

  // Chart 4: Ghosting After Initial Message by Gender
  const ghostingOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 1200,
        animateGradually: {
          enabled: true,
          delay: 150
        }
      }
    },
    colors: ['#FF7158'],
    plotOptions: {
      bar: {
        borderRadius: 8,
        dataLabels: { position: 'top' }
      }
    },
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

  const ghostingSeries = [{
    name: 'Ghostings',
    data: [12.4, 8.7]
  }];

  // Chart 5: Average Number of Conversations by Gender
  const conversationsOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 1200,
        animateGradually: {
          enabled: true,
          delay: 150
        }
      }
    },
    colors: ['#FF7158'],
    plotOptions: {
      bar: {
        borderRadius: 8,
        dataLabels: { position: 'top' }
      }
    },
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

  const conversationsSeries = [{
    name: 'Conversations',
    data: [24.3, 18.9]
  }];

  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Tinder Dating Statistics</h1>
          <p className="hero-subtitle">A Comprehensive Analysis of User Behavior and Match Success</p>
        </div>
      </header>

      {/* Dataset Overview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Dataset Overview</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">{datasetStats.totalUsers.toLocaleString()}</div>
              <div className="stat-label">Active Users Analyzed</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{datasetStats.ageRange}</div>
              <div className="stat-label">Age Range (Years)</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{(datasetStats.matchRateAvg * 100).toFixed(1)}%</div>
              <div className="stat-label">Average Match Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{datasetStats.originalUsers - datasetStats.cleanedUsers}</div>
              <div className="stat-label">Inactive Users Removed</div>
            </div>
          </div>
          <div className="methodology">
            <h3>Data Cleaning Methodology</h3>
            <p>The dataset underwent rigorous cleaning to ensure data quality. We removed inactive users (those with zero activity across all metrics), filtered unrealistic ages (outside 18-65 range), eliminated users with zero matches AND zero swipe likes, and calculated match rates as the ratio of matches to swipe likes.</p>
          </div>
        </div>
      </section>

      {/* Demographics Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Match Success by Demographics</h2>
          <div className="chart-card" ref={chart1Ref} data-chart-id="chart1">
            <p className="chart-description">
              This chart shows how match rates vary across different age filter groups. Users who set their age preferences to younger ranges (18-30) tend to have slightly higher match rates compared to older age ranges, though the difference is relatively modest across groups.
            </p>
            {visibleCharts.chart1 && (
              <Chart
                options={matchRateByAgeOptions}
                series={matchRateByAgeSeries}
                type="bar"
                height={400}
              />
            )}
          </div>
        </div>
      </section>

      {/* Swipe Behavior Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Swipe Behavior Analysis</h2>
          
          <div className="chart-card" ref={chart2Ref} data-chart-id="chart2">
            <p className="chart-description">
              Male users show significantly higher swipe activity than female users, both in terms of likes and passes. On average, males swipe right (like) approximately 4,892 times compared to females' 3,245 times. This pattern suggests males adopt a more active swiping strategy on the platform.
            </p>
            {visibleCharts.chart2 && (
              <Chart
                options={swipeComparisonOptions}
                series={swipeComparisonSeries}
                type="bar"
                height={400}
              />
            )}
          </div>

          <div className="chart-card" ref={chart3Ref} data-chart-id="chart3">
            <p className="chart-description">
              When examining swipe behavior as percentages, we see that both genders are relatively similar in their like-to-pass ratios. Females like approximately 60.1% of profiles they view, while males like 58.8%, showing that despite different volumes, the selectivity patterns are quite similar between genders.
            </p>
            {visibleCharts.chart3 && (
              <Chart
                options={swipePercentageOptions}
                series={swipePercentageSeries}
                type="bar"
                height={400}
              />
            )}
          </div>
        </div>
      </section>

      {/* Engagement Metrics Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Engagement & Communication Patterns</h2>
          
          <div className="chart-card" ref={chart4Ref} data-chart-id="chart4">
            <p className="chart-description">
              Ghosting behavior—when someone stops responding after the initial message—shows interesting gender differences. Female users experience an average of 12.4 ghostings compared to males' 8.7, suggesting that females may be more selective in continuing conversations after initial contact.
            </p>
            {visibleCharts.chart4 && (
              <Chart
                options={ghostingOptions}
                series={ghostingSeries}
                type="bar"
                height={400}
              />
            )}
          </div>

          <div className="chart-card" ref={chart5Ref} data-chart-id="chart5">
            <p className="chart-description">
              Female users maintain more active conversations on average (24.3 conversations) compared to male users (18.9 conversations). This suggests that while males swipe more frequently, females tend to engage in more sustained messaging once a match is made.
            </p>
            {visibleCharts.chart5 && (
              <Chart
                options={conversationsOptions}
                series={conversationsSeries}
                type="bar"
                height={400}
              />
            )}
          </div>
        </div>
      </section>

      {/* Key Insights Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Key Insights</h2>
          <div className="insights-grid">
            <div className="insight-card">
              <div className="insight-icon">📊</div>
              <h3>Match Rate Consistency</h3>
              <p>Match rates remain relatively stable across age groups, ranging from 28.5% to 34.2%, with younger age preferences showing marginally higher success rates.</p>
            </div>
            <div className="insight-card">
              <div className="insight-icon">👥</div>
              <h3>Gender Differences in Activity</h3>
              <p>Males demonstrate 50% higher swipe volume than females, yet both genders show similar selectivity rates around 59-60% like ratios.</p>
            </div>
            <div className="insight-card">
              <div className="insight-icon">💬</div>
              <h3>Quality vs Quantity</h3>
              <p>Females maintain 29% more conversations despite lower swipe counts, suggesting a quality-over-quantity approach to matching and engagement.</p>
            </div>
            <div className="insight-card">
              <div className="insight-icon">👻</div>
              <h3>Ghosting Patterns</h3>
              <p>Higher ghosting rates for females (43% more than males) may reflect their more selective approach to continuing conversations beyond initial contact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            <strong>Data Source:</strong> Tinder User Dataset (1,209 users, cleaned to 1,194 active users)
          </p>
          <p className="footer-text">
            <strong>Analysis Date:</strong> 2025 | <strong>Course:</strong> DOTE5110I Statistical Analysis
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

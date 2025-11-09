import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import DataPrepSection from './components/DataPrepSection';
import FindingsSection from './components/FindingsSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import MatchSuccessSection from './components/MatchSuccessSection';
import MatchingStatsSection from './components/MatchingStatsSection';
import Navbar from './components/Navbar';
import RegressionSection from './components/RegressionSection';
import SwipeBehaviorSection from './components/SwipeBehaviorSection';
import SwipeSplitLayout from './components/SwipeSplitLayout';

function App() {
  // State to track which charts are visible
  const [visibleCharts, setVisibleCharts] = useState({
    chart2: false,
    chart3: false,
    chart4: false,
    chart5: false,
    chart6: false,
    chart7: false
  });

  // State for active section in navbar
  const [activeSection, setActiveSection] = useState('intro');

  // State for animated counts
  const [counts, setCounts] = useState({
    original: 0,
    final: 0,
    removed: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  // Refs for each section
  const introRef = useRef(null);
  const dataRef = useRef(null);
  const behaviorRef1 = useRef(null);
  const swipeSplitRef = useRef(null);
  const behaviorRef2 = useRef(null);
  const messagingSplitRef = useRef(null);
  const behaviorRef3 = useRef(null);
  const matchingStatsRef = useRef(null);
  const matchRef = useRef(null);
  const regressionRef = useRef(null);
  const findingsRef = useRef(null);

  // Refs for each chart
  const chart2Ref = useRef(null);
  const chart3Ref = useRef(null);
  const chart4Ref = useRef(null);
  const chart5Ref = useRef(null);
  const chart6Ref = useRef(null);
  const chart7Ref = useRef(null);
  const statsCardRef = useRef(null);

  // Smooth scroll to section function
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Scroll spy for navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'intro', ref: introRef },
        { id: 'data', ref: dataRef },
        { id: 'behavior', ref: behaviorRef1 },
        { id: 'swipe-split', ref: swipeSplitRef },
        { id: 'messaging-split', ref: messagingSplitRef },
        { id: 'matching', ref: matchingStatsRef },
        { id: 'match', ref: matchRef },
        { id: 'regression', ref: regressionRef },
        { id: 'findings', ref: findingsRef }
      ];

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current && section.ref.current.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer setup for charts
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
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

    const refs = [chart3Ref, chart5Ref, chart7Ref];
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

  // Count-up animation for stats
  useEffect(() => {
    const observerOptions = {
      threshold: 0.5
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 2000; // 3 seconds
          const steps = 60;
          const stepDuration = duration / steps;

          let currentStep = 0;
          const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const easeOutQuad = 1 - Math.pow(1 - progress, 3);

            setCounts({
              original: Math.floor(1209 * easeOutQuad),
              final: Math.floor(952 * easeOutQuad),
              removed: Math.floor(257 * easeOutQuad)
            });

            if (currentStep >= steps) {
              clearInterval(interval);
              setCounts({ original: 1209, final: 952, removed: 257 });
            }
          }, stepDuration);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const currentRef = statsCardRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  // Chart configurations
  const swipeComparisonOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 1500,
        animateGradually: { enabled: true, delay: 500 }
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
        animateGradually: { enabled: true, delay: 500 }
      }
    },
    colors: ['#90EE90', '#424242'],
    plotOptions: { bar: { horizontal: false, borderRadius: 6 } },
    dataLabels: {
      enabled: false
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
      text: '',
      align: 'center',
      style: { fontSize: '18px', fontWeight: 'bold', color: '#424242' }
    },
    legend: { position: 'top', horizontalAlign: 'center' },
    fill: { opacity: 1 },
    tooltip: { y: { formatter: (val) => val.toFixed(1) + '%' } }
  };

  const swipePercentageSeries = [
    { name: 'Swipe Likes', data: [5, 40] },
    { name: 'Swipe Passes', data: [95, 60] }
  ];

  const ghostingOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 1500,
        animateGradually: { enabled: true, delay: 500 }
      }
    },
    colors: ['#E34681', '#1EB2DF'],
    plotOptions: {
      bar: {
        borderRadius: 8,
        dataLabels: { position: 'top' },
        distributed: true
      }
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => Math.round(val),
      offsetY: -20,
      style: { fontSize: '12px', colors: ['#424242'] }
    },
    xaxis: {
      categories: ['Female', 'Male'],
      labels: { style: { colors: '#424242', fontSize: '14px' } }
    },
    yaxis: {
      title: { text: '', style: { color: '#424242' } },
      labels: { style: { colors: '#424242' } }
    },
    title: {
      text: '',
      align: 'center',
      style: { fontSize: '18px', fontWeight: 'bold', color: '#424242' }
    },
    legend: {
      show: false
    },
    grid: { borderColor: '#f1f1f1' }
  };

  const ghostingSeries = [{ name: 'Ghostings', data: [122, 22] }];

  const conversationsOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 1500,
        animateGradually: { enabled: true, delay: 500 }
      }
    },
    colors: ['#E34681', '#1EB2DF'],
    plotOptions: {
      bar: {
        borderRadius: 8,
        dataLabels: { position: 'top' },
        distributed: true
      }
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => Math.round(val),
      offsetY: -20,
      style: { fontSize: '12px', colors: ['#424242'] }
    },
    xaxis: {
      categories: ['Female', 'Male'],
      labels: { style: { colors: '#424242', fontSize: '14px' } }
    },
    yaxis: {
      title: { text: '', style: { color: '#424242' } },
      labels: { style: { colors: '#424242' } }
    },
    title: {
      text: '',
      align: 'center',
      style: { fontSize: '18px', fontWeight: 'bold', color: '#424242' }
    },
    legend: {
      show: false
    },
    grid: { borderColor: '#f1f1f1' }
  };

  const conversationsSeries = [{ name: 'Conversations', data: [420, 270] }];

  const stackedByAgeOptions = {
    chart: {
      type: 'bar',
      stacked: true,
      stackType: '100%',
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 1500,
        animateGradually: { enabled: true, delay: 500 }
      }
    },
    colors: ['#90EE90', '#424242'],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 0,
        columnWidth: '85%'
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: [
        '18-22 (F)', '23-27 (F)', '28-32 (F)', '33-37 (F)', '38-42 (F)', '>42 (F)',
        '18-22 (M)', '23-27 (M)', '28-32 (M)', '33-37 (M)', '38-42 (M)', '>42 (M)'
      ],
      labels: {
        style: { colors: '#424242', fontSize: '11px' },
        rotate: -45,
        rotateAlways: true
      }
    },
    yaxis: {
      title: { text: 'Percentage (%)', style: { color: '#424242' } },
      labels: {
        style: { colors: '#424242' },
        formatter: (val) => val.toFixed(0) + '%'
      }
    },
    title: {
      text: '',
      align: 'center',
      style: { fontSize: '18px', fontWeight: 'bold', color: '#424242' }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
      markers: { fillColors: ['#90EE90', '#424242'] }
    },
    fill: { opacity: 1 },
    tooltip: {
      y: { formatter: (val) => val.toFixed(1) + '%' }
    }
  };

  const stackedByAgeSeries = [
    {
      name: 'Swipe Likes',
      data: [5, 5, 8, 4, 14, 28, 44, 38, 38, 27, 26, 28]
    },
    {
      name: 'Swipe Passes',
      data: [95, 95, 92, 96, 86, 72, 56, 62, 62, 73, 74, 72]
    }
  ];

  const refs = {
    introRef,
    dataRef,
    behaviorRef: behaviorRef1,
    behaviorRef2,
    swipeSplitRef,
    messagingSplitRef,
    behaviorRef3,
    matchingStatsRef,
    matchRef,
    regressionRef,
    findingsRef
  };

  return (
    <div className="App">
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        refs={refs}
      />

      <HeroSection
        introRef={introRef}
        scrollToSection={scrollToSection}
        dataRef={dataRef}
      />

      <DataPrepSection
        dataRef={dataRef}
        scrollToSection={scrollToSection}
        swipeRef={behaviorRef1}
        statsCardRef={statsCardRef}
        counts={counts}
      />

      {/* Section 2: Interactive Behavior Diagram */}
      <SwipeBehaviorSection
        sectionRef={behaviorRef1}
        mode="interactive"
        showNextButton={true}
        scrollToSection={scrollToSection}
        nextSectionRef={swipeSplitRef}
      />

      {/* Section 3: Swiping Split Layout */}
      <section ref={swipeSplitRef} className="section">
        <div className="container" style={{ maxWidth: '100%', padding: 0 }}>
          <SwipeSplitLayout
            type="swiping"
            chart3Ref={chart3Ref}
            chart6Ref={chart6Ref}
            visibleCharts={visibleCharts}
            setVisibleCharts={setVisibleCharts}
            swipePercentageOptions={swipePercentageOptions}
            swipePercentageSeries={swipePercentageSeries}
            stackedByAgeOptions={stackedByAgeOptions}
            stackedByAgeSeries={stackedByAgeSeries}
          />
        </div>
      </section>

      {/* Section 4: Messaging Only Diagram */}
      <SwipeBehaviorSection
        sectionRef={behaviorRef2}
        mode="messaging-only"
        showNextButton={true}
        scrollToSection={scrollToSection}
        nextSectionRef={messagingSplitRef}
      />

      {/* Section 5: Messaging Split Layout */}
      <section ref={messagingSplitRef} className="section section-alt">
        <div className="container" style={{ maxWidth: '100%', padding: 0 }}>
          <SwipeSplitLayout
            type="messaging"
            chart3Ref={chart5Ref}
            chart6Ref={chart4Ref}
            visibleCharts={visibleCharts}
            setVisibleCharts={setVisibleCharts}
            swipePercentageOptions={conversationsOptions}
            swipePercentageSeries={conversationsSeries}
            stackedByAgeOptions={ghostingOptions}
            stackedByAgeSeries={ghostingSeries}
          />
        </div>
      </section>

      {/* Section 6: Matching Highlight Diagram */}
      <SwipeBehaviorSection
        sectionRef={behaviorRef3}
        mode="matching-only"
        showNextButton={true}
        scrollToSection={scrollToSection}
        nextSectionRef={matchingStatsRef}
      />

      {/* Section 7: Matching Stats */}
      <MatchingStatsSection
        matchingStatsRef={matchingStatsRef}
        scrollToSection={scrollToSection}
        nextSectionRef={matchRef}
      />

      {/* Section 8: Match Success with Box Plot */}
      <MatchSuccessSection
        matchRef={matchRef}
        scrollToSection={scrollToSection}
        regressionRef={regressionRef}
        chart7Ref={chart7Ref}
        visibleCharts={visibleCharts}
      />

      <RegressionSection
        regressionRef={regressionRef}
        scrollToSection={scrollToSection}
        findingsRef={findingsRef}
      />

      <FindingsSection
        findingsRef={findingsRef}
      />

      <Footer />
    </div>
  );
}

export default App;

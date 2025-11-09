import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import Card from './Card';
import './SwipeSplitLayout.css';

function SwipeSplitLayout({
    chart3Ref,
    chart6Ref,
    visibleCharts,
    swipePercentageOptions,
    swipePercentageSeries,
    stackedByAgeOptions,
    stackedByAgeSeries,
    type = 'swiping', // 'swiping' or 'messaging'
    setVisibleCharts
}) {
    const [currentChart, setCurrentChart] = useState(0);

    const handleCircleClick = () => {
        // Toggle between chart 0 and chart 1
        const newChart = currentChart === 0 ? 1 : 0;
        setCurrentChart(newChart);

        // Trigger animation for chart 2 (chart6 for swiping, chart4 for messaging)
        if (newChart === 1) {
            const chartId = type === 'swiping' ? 'chart6' : 'chart4';
            if (setVisibleCharts) {
                // First set to false to reset the chart
                setVisibleCharts(prev => ({ ...prev, [chartId]: false }));
                // Then set to true after a small delay to trigger animation
                setTimeout(() => {
                    setVisibleCharts(prev => ({ ...prev, [chartId]: true }));
                }, 50);  // Reduced delay for smoother transition
            }
        }
    };

    const isSwiping = type === 'swiping';

    // Key finding cards data - Chart 0 (First chart)
    const swipingFindingsChart0 = [
        { icon: '👩🏻', title: 'Female', description: 'More selective with approx 5% swipe likes' },
        { icon: '👦🏻', title: 'Male', description: 'A much broader "liking" strategy with approx 40% swipe likes' },
    ];

    // Key finding cards data - Chart 1 (Second chart after click)
    const swipingFindingsChart1 = [
        { icon: '👩🏻', title: '38+ age', description: 'Start becoming less selective' },
        { icon: '👦🏻', title: '35+ age', description: 'Become slightly more selective' },
    ];

    const messagingFindingsChart0 = [
        { icon: '💬 👩🏻', title: 'Females have a greater communication load', description: 'Successfully convert matches into engagement at a higher rate' },
        // { icon: '👻', title: 'Ghosting', description: 'Females ghost 122 vs males 22' },
    ];

    const messagingFindingsChart1 = [
        {
            icon: '👻 👩🏻',
            title: 'Females ghost at a much higher rate',
            description: 'A necessary filtering strategy for managing high volume of incoming interest'
        },
        // { icon: '👻', title: 'Filtering Strategy', description: 'Ghosting reflects need to filter interest' },
    ];

    const currentFindings = isSwiping
        ? (currentChart === 0 ? swipingFindingsChart0 : swipingFindingsChart1)
        : (currentChart === 0 ? messagingFindingsChart0 : messagingFindingsChart1);

    return (
        <div className="swipe-split-section">
            <div
                className={`swipe-split-left ${isSwiping ? '' : 'swipe-split-right-positioned'}`}
                onClick={handleCircleClick}
            >
                <div className={`swipe-circle-large swipe-circle-clickable ${isSwiping ? '' : 'swipe-circle-messaging'}`}>
                    <div className="circle-icon">{isSwiping ? '👆' : '💬'}</div>
                    <div className="circle-label">{isSwiping ? 'Swiping' : 'Messaging'}</div>

                </div>
            </div>
            <div className={`swipe-split-right-content ${isSwiping ? '' : 'swipe-split-left-content'}`}>
                {/* Key Finding Cards */}
                <div className="key-findings-row findings-active">
                    {currentFindings.map((finding, index) => (
                        <Card
                            key={`${currentChart}-${index}`}
                            icon={finding.icon}
                            title={finding.title}
                            description={finding.description}
                            variant="gradient"
                        />
                    ))}
                </div>

                {isSwiping ? (
                    <>
                        <div
                            className={`chart-card-modern chart-slide ${currentChart === 0 ? 'chart-active' : 'chart-hidden'}`}
                            ref={chart3Ref}
                            data-chart-id="chart3"
                        >
                            <h3 className="chart-title-modern">Plot 1: 100% Stacked Proportion of Swipe Likes & Passes (by Gender)</h3>
                            {/* <p className="chart-description-modern">
                                This chart illustrates the <strong>proportional breakdown</strong> of swipe types. For females, swipe likes are a very
                                small fraction (approx. 5%) of their total activity. For males, swipe likes account for a much larger portion
                                (approx. 40%) of their total swipes.
                            </p> */}
                            <div className={`chart-wrapper ${visibleCharts.chart3 ? 'visible' : ''}`}>
                                <Chart
                                    key="chart3-swiping"
                                    options={swipePercentageOptions}
                                    series={swipePercentageSeries}
                                    type="bar"
                                    height={500}
                                />
                            </div>
                        </div>

                        <div
                            className={`chart-card-modern chart-slide ${currentChart === 1 ? 'chart-active' : 'chart-hidden'}`}
                            ref={chart6Ref}
                            data-chart-id="chart6"
                        >
                            <h3 className="chart-title-modern">100% Stacked Proportion of Swipe Likes & Passes (by Age Group and Gender)</h3>
                            {/* <p className="chart-description-modern">
                                Breaking down swipe behavior by both age and gender reveals nuanced patterns. <strong>Younger females (18-27)
                                    are extremely selective (~5% likes)</strong>, while females aged 38-42+ become more open (~14-28% likes).
                                Males maintain consistent selectivity across ages, with <strong>younger males (18-27) liking ~38-44%</strong> of profiles.
                            </p> */}
                            <div className={`chart-wrapper ${visibleCharts.chart6 ? 'visible' : ''}`}>
                                {visibleCharts.chart6 && (
                                    <Chart
                                        key="chart6-age-group"
                                        options={stackedByAgeOptions}
                                        series={stackedByAgeSeries}
                                        type="bar"
                                        height={500}
                                    />
                                )}
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div
                            className={`chart-card-modern chart-slide ${currentChart === 0 ? 'chart-active' : 'chart-hidden'}`}
                            ref={chart3Ref}
                            data-chart-id="chart5"
                        >
                            <h3 className="chart-title-modern">Plot 3: Average Number of Conversations</h3>
                            {/* <p className="chart-description-modern">
                                Females are involved in a significantly higher average number of conversations, at approximately <strong>420</strong>.
                                Males participate in a lower average number of conversations, at approximately <strong>270</strong>.
                            </p> */}
                            <div className={`chart-wrapper ${visibleCharts.chart5 ? 'visible' : ''}`}>
                                {visibleCharts.chart5 && (
                                    <Chart
                                        key="chart5-conversations"
                                        options={swipePercentageOptions}
                                        series={swipePercentageSeries}
                                        type="bar"
                                        height={500}
                                    />
                                )}
                            </div>
                        </div>

                        <div
                            className={`chart-card-modern chart-slide ${currentChart === 1 ? 'chart-active' : 'chart-hidden'}`}
                            ref={chart6Ref}
                            data-chart-id="chart4"
                        >
                            <h3 className="chart-title-modern">Plot 4: Average Number of Ghostings After 1st Message</h3>
                            {/* <p className="chart-description-modern">
                                This chart reveals a stark difference in ghosting behavior. Females have a very high average number of ghostings,
                                at approximately <strong>122</strong>. In contrast, males have a very low average, at approximately <strong>22</strong>.
                            </p> */}
                            <div className={`chart-wrapper ${visibleCharts.chart4 ? 'visible' : ''}`}>
                                {visibleCharts.chart4 && (
                                    <Chart
                                        key="chart4-ghostings"
                                        options={stackedByAgeOptions}
                                        series={stackedByAgeSeries}
                                        type="bar"
                                        height={500}
                                    />
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default SwipeSplitLayout;


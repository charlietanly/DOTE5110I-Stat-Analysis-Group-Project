# Next Button Implementation Guide

## ✅ CSS Added
The `.next-button-corner` class has been added to `App.css` for fixed positioning in the right bottom corner.

```css
.next-button-corner {
  position: fixed;
  bottom: 40px;
  right: 40px;
  padding: 16px 32px;
  background: linear-gradient(135deg, var(--tinder-pink) 0%, var(--tinder-orange) 100%);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(253, 43, 123, 0.3);
  z-index: 100;
}
```

## 📋 Sections That Need Next Buttons

### Section 1: Hero Section
**File:** `src/components/HeroSection.js`
**Status:** ✅ Already has button (scrolls to DataPrepSection)
**Action:** Change className from `next-button` to `next-button-corner`

### Section 2: Data Prep Section
**File:** `src/components/DataPrepSection.js`
**Status:** ✅ Already has button (scrolls to behaviorRef1)
**Action:** Change className from `next-button` to `next-button-corner`

### Section 3: Interactive Behavior Diagram
**File:** `src/components/SwipeBehaviorSection.js`
**Status:** ✅ Already has button when `showNextButton={true}`
**Action:** Change className from `next-button` to `next-button-corner`

### Section 4: Swiping Split Layout
**File:** `src/App.js` (line 475-489)
**Status:** ❌ No button
**Action:** Add button inside the section

```javascript
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
  <button className="next-button-corner" onClick={() => scrollToSection(behaviorRef2)}>
    Next →
  </button>
</section>
```

### Section 5: Messaging Only Diagram
**File:** Already handled by SwipeBehaviorSection
**Status:** Currently `showNextButton={false}`
**Action:** Change to `showNextButton={true}` and add `nextSectionRef={messagingSplitRef}`

```javascript
{/* Section 4: Messaging Only Diagram */}
<SwipeBehaviorSection
  sectionRef={behaviorRef2}
  mode="messaging-only"
  showNextButton={true}
  scrollToSection={scrollToSection}
  nextSectionRef={messagingSplitRef}
/>
```

### Section 6: Messaging Split Layout
**File:** `src/App.js` (line 499-513)
**Status:** ❌ No button
**Action:** Add button inside the section

```javascript
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
  <button className="next-button-corner" onClick={() => scrollToSection(behaviorRef3)}>
    Next →
  </button>
</section>
```

### Section 7: Matching Highlight Diagram
**File:** Already handled by SwipeBehaviorSection
**Status:** Currently `showNextButton={false}`
**Action:** Change to `showNextButton={true}` and add `nextSectionRef={matchingStatsRef}`

```javascript
{/* Section 6: Matching Highlight Diagram */}
<SwipeBehaviorSection
  sectionRef={behaviorRef3}
  mode="matching-only"
  showNextButton={true}
  scrollToSection={scrollToSection}
  nextSectionRef={matchingStatsRef}
/>
```

### Section 8: Matching Stats
**File:** `src/components/MatchingStatsSection.js`
**Status:** ❌ No button
**Action:** Add props and button

**Update component props:**
```javascript
function MatchingStatsSection({ matchingStatsRef, scrollToSection, nextSectionRef })
```

**Add button before closing section:**
```javascript
<button className="next-button-corner" onClick={() => scrollToSection(nextSectionRef)}>
  Next →
</button>
```

**Update App.js:**
```javascript
<MatchingStatsSection
  matchingStatsRef={matchingStatsRef}
  scrollToSection={scrollToSection}
  nextSectionRef={matchRef}
/>
```

### Section 9: Match Success
**File:** `src/components/MatchSuccessSection.js`
**Status:** ✅ Already has button
**Action:** Change className from `next-button` to `next-button-corner`

### Section 10: Regression
**File:** `src/components/RegressionSection.js`
**Status:** ✅ Already has button
**Action:** Change className from `next-button` to `next-button-corner`

### Section 11: Findings
**File:** `src/components/FindingsSection.js`
**Status:** ❌ No button (last section)
**Action:** No button needed (final section)

## 🔧 Quick Fix for SwipeBehaviorSection

Update `src/components/SwipeBehaviorSection.js` line 36:

```javascript
// Change from:
<button className="next-button" onClick={() => scrollToSection(nextSectionRef)}>

// To:
<button className="next-button-corner" onClick={() => scrollToSection(nextSectionRef)}>
```

## 📱 Responsive Behavior

On mobile (< 768px):
- Button moves to `bottom: 20px; right: 20px;`
- Smaller padding and font size
- Maintains fixed position

## 🎨 Visual Style

- **Position:** Fixed in right bottom corner
- **Color:** Tinder pink to orange gradient
- **Shape:** Rounded pill
- **Hover:** Lifts up with enhanced shadow
- **Z-index:** 100 (appears above content)


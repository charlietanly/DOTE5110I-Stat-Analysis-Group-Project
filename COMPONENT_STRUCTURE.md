# Component Structure Documentation

## 📁 Project File Structure

```
src/
├── App.js                          # Main application container
├── App.css                         # Global styles
├── index.js                        # Application entry point
├── index.css                       # Base styles
└── components/                     # Component directory
    ├── Navbar.js                   # Fixed navigation bar
    ├── Navbar.css
    ├── HeroSection.js              # Introduction section
    ├── HeroSection.css
    ├── DataPrepSection.js          # Data preparation section
    ├── DataPrepSection.css
    ├── SwipeBehaviorSection.js     # Swipe behavior analysis
    ├── SwipeBehaviorSection.css
    ├── MessagingBehaviorSection.js # Messaging behavior analysis
    ├── MessagingBehaviorSection.css
    ├── ConceptDiagram.js           # Usage behaviour flow diagram
    ├── ConceptDiagram.css
    ├── MatchSuccessSection.js      # Match success analysis
    ├── MatchSuccessSection.css
    ├── RegressionSection.js        # Regression analysis
    ├── RegressionSection.css
    ├── FindingsSection.js          # Key findings & conclusion
    ├── FindingsSection.css
    ├── Footer.js                   # Footer component
    └── Footer.css
```

## 🎯 Component Overview

### 1. **App.js**
- Main container component
- Manages all state (chart visibility, active section, animated counts)
- Contains chart configurations
- Handles scroll events and intersection observers
- Orchestrates all section components

### 2. **Navbar.js**
- Fixed navigation bar at the top
- Shows active section indicator
- Smooth scroll functionality
- Responsive design for mobile

### 3. **HeroSection.js**
- Landing page with project title
- Group member information
- Animated Tinder app GIF mockup
- Call-to-action button to next section

### 4. **DataPrepSection.js**
- Project introduction
- Research goals
- Data preprocessing steps
- Animated statistics card showing dataset info

### 5. **SwipeBehaviorSection.js**
- Analysis of swiping patterns by gender
- Multiple chart visualizations (Chart 2, 3, 6)
- Insights on selectivity differences

### 6. **MessagingBehaviorSection.js**
- Analysis of messaging patterns
- **Includes ConceptDiagram component** (Swiping → Matching → Messaging)
- Charts for conversations and ghosting behavior (Chart 4, 5)

### 7. **ConceptDiagram.js** ⭐ NEW
- Visual flow diagram showing Tinder usage journey
- Three stages: Swiping, Matching, Messaging
- Animated hover effects
- Gradient backgrounds with Tinder branding colors

### 8. **MatchSuccessSection.js**
- Match rate analysis by age and gender
- Box plot visualization (Chart 7)
- Bar chart showing average match rates (Chart 1)

### 9. **RegressionSection.js**
- Three regression models comparison
- Detailed coefficient tables
- Model performance metrics
- Validation results

### 10. **FindingsSection.js**
- Key findings in card layout
- Four main insights with icons
- Limitations and future work section

### 11. **Footer.js**
- Data source attribution
- Course information
- Educational disclaimer

## 🎨 Key Features Implemented

### ConceptDiagram Component
The concept diagram shows the user journey flow:
- **Left Circle (Pink)**: Swiping behavior with 👆 icon
- **Connector (Dark Gray)**: Matching process
- **Right Circle (Orange-Red)**: Messaging behavior with 💬 icon

Design features:
- Gradient backgrounds matching Tinder branding
- Hover animations (scale effect)
- Responsive layout (vertical on mobile)
- Drop shadows for depth
- Clean typography

### Benefits of Component Structure
1. **Maintainability**: Each section is isolated, easy to update
2. **Reusability**: Components can be reused or modified independently
3. **Clarity**: Clear separation of concerns
4. **Scalability**: Easy to add new sections or features
5. **CSS Organization**: Each component has its own styles
6. **Performance**: Can implement code splitting if needed

## 🚀 Running the Application

```bash
npm start
```

The application will start on `http://localhost:3000`

## 📝 Notes

- All chart configurations remain in App.js for centralized management
- State management is handled at the App level
- Props are passed down to child components
- Intersection Observer API is used for scroll animations
- Responsive design implemented across all components


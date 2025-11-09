# Card Component Usage Guide

## 📦 Generic Card Component

A reusable card component that can be used throughout the application for consistent styling and easy maintenance.

## 🎨 Available Variants

### 1. **default** - White Card (Large, centered)
Used in: FindingsSection
```javascript
<Card 
  icon="👥" 
  title="Gender & Age Impact"
  description="Females consistently outperform males in match rates"
  variant="default"
/>
```

### 2. **gradient** - Pink Gradient Card (Medium, compact)
Used in: MatchSuccessSection
```javascript
<Card 
  icon="📊" 
  title="Peak Age Group"
  description="18-22 age group shows highest median match rates"
  variant="gradient"
/>
```

### 3. **split** - Split Layout Card (Small, inline)
Used in: SwipeSplitLayout
```javascript
<Card 
  icon="💬" 
  title="Conversations"
  description="Females manage 420 vs males 270"
  variant="split"
/>
```

## 📝 Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `icon` | string | Yes | Emoji or icon to display |
| `title` | string | Yes | Card title/heading |
| `description` | string | Yes | Card content/description |
| `variant` | string | No | Style variant: 'default', 'gradient', 'split' (default: 'default') |
| `className` | string | No | Additional CSS classes |

## 🚀 How to Use

### Import the Component
```javascript
import Card from './components/Card';
```

### Single Card
```javascript
<Card 
  icon="🎯" 
  title="High Variance"
  description="Male users show significant outliers"
  variant="gradient"
/>
```

### Multiple Cards with Array
```javascript
const findings = [
  { icon: '👥', title: 'Finding 1', description: 'Description 1' },
  { icon: '📊', title: 'Finding 2', description: 'Description 2' },
  { icon: '🎯', title: 'Finding 3', description: 'Description 3' }
];

<div className="cards-container">
  {findings.map((finding, index) => (
    <Card
      key={index}
      icon={finding.icon}
      title={finding.title}
      description={finding.description}
      variant="gradient"
    />
  ))}
</div>
```

## 📍 Where It's Used

### ✅ FindingsSection.js
- Variant: **default**
- 4 cards in 2x2 grid
- White background, large icons

### ✅ MatchSuccessSection.js
- Variant: **gradient**
- 3 cards in vertical layout
- Pink gradient background, medium icons

### ✅ SwipeSplitLayout.js
- Variant: **split**
- 3 cards in horizontal row
- Pink gradient background, small icons
- Animated with chart transitions

## 🎨 Styling

All card styles are defined in `src/components/Card.css`:
- Base styles
- Variant-specific styles
- Hover effects
- Responsive breakpoints

To customize a specific instance, use the `className` prop:
```javascript
<Card 
  icon="👥" 
  title="Custom Card"
  description="With custom styling"
  variant="gradient"
  className="my-custom-class"
/>
```

## ✨ Benefits

- ✅ **Reusable** - Use anywhere with consistent styling
- ✅ **Maintainable** - Update one file, affects all cards
- ✅ **Flexible** - Three variants for different contexts
- ✅ **Clean Code** - Reduces duplication
- ✅ **Easy to Extend** - Add new variants easily

## 🔧 Adding New Variants

To add a new variant, edit `Card.css`:

```css
/* Variant: YourVariant */
.card-yourvariant {
  background: /* your background */;
  /* your styles */
}

.card-yourvariant .card-icon {
  font-size: /* your size */;
}

.card-yourvariant .card-title {
  font-size: /* your size */;
}
```

Then use it:
```javascript
<Card variant="yourvariant" ... />
```


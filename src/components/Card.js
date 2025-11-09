import React from 'react';
import './Card.css';

/**
 * Generic Card Component
 * 
 * @param {string} icon - Emoji or icon to display
 * @param {string} title - Card title
 * @param {string} description - Card description/content
 * @param {string} variant - Style variant: 'default', 'gradient', 'split'
 * @param {string} className - Additional CSS classes
 */
function Card({ 
  icon, 
  title, 
  description, 
  variant = 'default',
  className = ''
}) {
  return (
    <div className={`card card-${variant} ${className}`}>
      <div className="card-icon">{icon}</div>
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
    </div>
  );
}

export default Card;


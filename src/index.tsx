import React from 'react';
import { createRoot } from 'react-dom/client';
import { Home } from './pages/Home'; // Import the main App component
import './styles.css'; // Import global styles

const container = document.getElementById('root');
if (container) {
  // Create a root instance
  const root = createRoot(container);
  root.render(<Home />);
} else {
  console.error('Failed to find the root element');
}

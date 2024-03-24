import React from 'react';
import { ThemeProvider } from 'styled-components';

import { AppRouter } from '@components';
import { createRoot } from 'react-dom/client';
import App from '@/App';
import { theme } from '@/theme';
import '@/styles.css'; // Import global styles

const container = document.getElementById('root');
if (container) {
  // Create a root instance
  const root = createRoot(container);
  root.render(
    <ThemeProvider theme={theme}>
      <AppRouter>
        <App />
      </AppRouter>
    </ThemeProvider>,
  );
} else {
  console.error('Failed to find the root element');
}

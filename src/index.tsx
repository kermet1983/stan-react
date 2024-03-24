import { ThemeProvider } from 'styled-components';

import App from '@/App';
import '@/styles.css'; // Import global styles
import { theme } from '@/theme';
import { AppRouter } from '@components';
import { createRoot } from 'react-dom/client';

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

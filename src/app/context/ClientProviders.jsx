'use client';

import { ThemeProvider } from './ThemeContext';

export default function ClientProviders({ children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
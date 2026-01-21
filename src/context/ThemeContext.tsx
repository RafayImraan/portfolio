import { createContext, useContext } from 'react';

interface ThemeContextType {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  highContrast: boolean;
  toggleContrast: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
  highContrast: false,
  toggleContrast: () => {},
});

export const useTheme = () => useContext(ThemeContext);

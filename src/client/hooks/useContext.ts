import { useContext } from 'react';

// Context
import { ThemeContext } from '../context';

export const useTheme = () => useContext(ThemeContext);

import { useContext } from 'react';

// Utils
import { ThemeContext } from '../utils/context';

export const useTheme = () => useContext(ThemeContext);

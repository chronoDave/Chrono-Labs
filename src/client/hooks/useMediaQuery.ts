import {
  useState,
  useLayoutEffect,
  useCallback
} from 'react';
import { Theme } from '../theme';

import { useTheme } from './useContext';

type Query = (breakpoints: Theme['breakpoints']) => string;

export default (query: Query) => {
  const theme = useTheme();
  const getMatch = useCallback(() => (window
    .matchMedia(query(theme.breakpoints).replace(/@media/g, ''))
    .matches
  ), [query, theme.breakpoints]);

  const [match, setMatch] = useState(getMatch());

  useLayoutEffect(() => {
    const handleResize = () => setMatch(getMatch());

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [getMatch]);

  return match;
};

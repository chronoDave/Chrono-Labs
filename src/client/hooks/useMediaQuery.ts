import {
  useState,
  useLayoutEffect,
  useCallback
} from 'react';
import { Theme } from '../theme';

import { useTheme } from './useContext';

type Key = keyof Theme['breakpoints']['query'];
type Value = keyof Theme['breakpoints']['value'];

export default (key: Key, value: Value) => {
  const theme = useTheme();

  const getMatch = useCallback(() => {
    const query = theme.breakpoints.create(key, value);

    return window
      .matchMedia(query.replace(/@media/g, ''))
      .matches;
  }, [key, value, theme.breakpoints]);

  const [match, setMatch] = useState(getMatch());

  useLayoutEffect(() => {
    const handleResize = () => setMatch(getMatch());

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [getMatch]);

  return match;
};

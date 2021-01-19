import { cloneElement } from 'react';
import { css, cx } from '@emotion/css';

// Hooks
import { useTheme } from '../../hooks';

// Theme
import { Theme } from '../../theme';

export interface HiddenProps {
  on: (breakpoints: Theme['breakpoints']) => string,
  children: JSX.Element
}

const Hidden = ({ on, children }: HiddenProps) => {
  const theme = useTheme();

  return cloneElement(children, {
    className: cx(
      children.props.className,
      css({
        [on(theme.breakpoints)]: {
          display: 'none'
        }
      })
    )
  });
};

export default Hidden;

import { createElement } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

// Styles
import { useTypographyStyles } from './Typography.styles';

// Utils
import { shouldRenderClass } from '../../utils';

// Validation
import {
  propSpacingShorthand,
  propTypographyVariant
} from '../../validation/propTypes';

const Typography = props => {
  const {
    variant,
    color,
    href,
    padding,
    margin,
    className,
    children
  } = props;

  const classes = useTypographyStyles({ padding, margin });

  const getTypeFromVariant = () => {
    if (href) return 'a';
    if (variant === 'caption') return 'span';
    if (variant === 'body1' || variant === 'body2') return 'p';
    return variant;
  };

  return createElement(
    getTypeFromVariant(),
    {
      href,
      className: clsx(
        classes.root,
        classes[variant],
        {
          [classes[color]]: color !== 'inherit',
          [classes.padding]: shouldRenderClass({ padding }),
          [classes.margin]: shouldRenderClass({ margin }),
          [classes.link]: href
        },
        className
      )
    },
    children
  );
};

Typography.propTypes = {
  variant: propTypographyVariant,
  color: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'disabled'
  ]),
  padding: propSpacingShorthand,
  margin: propSpacingShorthand,
  href: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

Typography.defaultProps = {
  className: null,
  href: null,
  padding: null,
  margin: null,
  variant: 'body1',
  color: 'inherit'
};

export default Typography;

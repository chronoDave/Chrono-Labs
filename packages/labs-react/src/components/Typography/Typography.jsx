import { createElement } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

// Styles
import { useTypographyStyles } from './Typography.styles';

// Utils
import { shouldRenderClass } from '../../utils';
import { theme } from '../../utils/theme';

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
          [classes.margin]: shouldRenderClass({ margin })
        },
        className
      )
    },
    children
  );
};

Typography.propTypes = {
  variant: PropTypes.oneOf(Object.keys(theme.typography)),
  color: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'disabled'
  ]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

Typography.defaultProps = {
  className: null,
  variant: 'body1',
  color: 'inherit'
};

export default Typography;

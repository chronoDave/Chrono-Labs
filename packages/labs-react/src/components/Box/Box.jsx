import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

// Utils
import { shouldRenderClass } from '../../utils';

// Validation
import {
  propFlexAxis,
  propSpacingShorthand
} from '../../validation/propTypes';

// Styles
import { useBoxStyles } from './Box.styles';

const Box = props => {
  const {
    // Flex
    flexDirection,
    justifyContent,
    alignItems,
    justifySelf,
    alignSelf,
    flexGrow,
    flexShrink,
    wrap,
    // Size
    width,
    height,
    minHeight,
    minWidth,
    maxHeight,
    maxWidth,
    // Spacing
    margin,
    padding,
    // Misc
    display,
    className,
    children
  } = props;

  const flex = {
    flexDirection,
    justifyContent,
    alignItems,
    justifySelf,
    alignSelf,
    flexGrow,
    flexShrink,
    flexWrap: wrap
  };

  const size = {
    minHeight,
    minWidth,
    maxHeight,
    maxWidth,
    width,
    height
  };

  const spacing = {
    margin,
    padding
  };

  const classes = useBoxStyles({
    display,
    flex,
    size,
    spacing
  });

  return (
    <div
      className={clsx(
        classes.root,
        {
          [classes.flex]: shouldRenderClass(flex),
          [classes.size]: shouldRenderClass(size),
          [classes.spacing]: shouldRenderClass(spacing)
        },
        className
      )}
    >
      {children}
    </div>
  );
};

Box.propTypes = {
  flexDirection: PropTypes.oneOf([
    'row',
    'column',
    'row-reverse',
    'column-reverse'
  ]),
  display: PropTypes.oneOf([
    'block',
    'inline-flex',
    'flex'
  ]),
  justifyContent: propFlexAxis,
  alignItems: propFlexAxis,
  justifySelf: propFlexAxis,
  alignSelf: propFlexAxis,
  flexGrow: PropTypes.number,
  flexShrink: PropTypes.number,
  wrap: PropTypes.oneOf([
    'wrap',
    'nowrap',
    'wrapreverse'
  ]),
  minHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  minWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  maxHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  maxWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  margin: propSpacingShorthand,
  padding: propSpacingShorthand,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

Box.defaultProps = {
  display: 'flex',
  flexDirection: null,
  justifyContent: null,
  wrap: null,
  alignItems: null,
  minHeight: null,
  minWidth: null,
  maxHeight: null,
  maxWidth: null,
  width: null,
  height: null,
  margin: null,
  padding: null,
  justifySelf: null,
  alignSelf: null,
  flexGrow: null,
  flexShrink: null,
  className: null
};

export default Box;

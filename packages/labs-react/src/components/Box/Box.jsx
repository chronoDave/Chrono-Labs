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
    // Size
    minHeight,
    // Spacing
    margin,
    padding,
    // Misc
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
  };

  const size = {
    minHeight
  };

  const spacing = {
    margin,
    padding
  };

  const classes = useBoxStyles({
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
        }
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
  justifyContent: propFlexAxis,
  alignItems: propFlexAxis,
  justifySelf: propFlexAxis,
  alignSelf: propFlexAxis,
  flexGrow: PropTypes.number,
  flexShrink: PropTypes.number,
  minHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  margin: propSpacingShorthand,
  padding: propSpacingShorthand,
  children: PropTypes.node.isRequired
};

Box.defaultProps = {
  flexDirection: null,
  justifyContent: null,
  alignItems: null,
  minHeight: null,
  margin: null,
  padding: null,
  justifySelf: null,
  alignSelf: null,
  flexGrow: null,
  flexShrink: null,
};

export default Box;

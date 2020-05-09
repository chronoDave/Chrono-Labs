import PropTypes from 'prop-types';

export const propFlexAxis = PropTypes.oneOf([
  'center',
  'start',
  'end',
  'flex-start',
  'flex-end',
  'left',
  'right',
  'normal',
  'space-around',
  'space-between',
  'space-evenly',
  'stretch',
  'inherit',
  'initial',
  'unset'
]);

export const propSpacingShorthand = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])),
  PropTypes.shape({
    top: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    right: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    bottom: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    left: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])
  })
]);

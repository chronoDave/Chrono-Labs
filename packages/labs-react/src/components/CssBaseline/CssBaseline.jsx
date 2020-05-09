import PropTypes from 'prop-types';

// Styles
import { useGlobalStyles } from './CssBaseline.styles';

const CssBaseline = props => {
  const { children } = props;

  useGlobalStyles();

  return children;
};

CssBaseline.propTypes = {
  children: PropTypes.node.isRequired
};

export default CssBaseline;

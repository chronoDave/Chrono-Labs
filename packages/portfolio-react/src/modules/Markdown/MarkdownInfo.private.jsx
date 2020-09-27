import React from 'react';
import PropTypes from 'prop-types';

// Core
import { Box, Typography } from '@material-ui/core';

const MarkdownInfo = ({ primary, secondary, date }) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    my={3}
    py={4}
    borderTop={1}
    borderBottom={1}
    borderColor="text.primary"
  >
    <Typography paragraph align="center">
      <b>
        {secondary}
      </b>
    </Typography>
    <Typography variant="h2" paragraph align="center">
      {primary}
    </Typography>
    <Typography variant="subtitle2" align="center">
      {date}
    </Typography>
  </Box>
);

MarkdownInfo.propTypes = {
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default MarkdownInfo;

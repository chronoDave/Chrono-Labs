import React from 'react';
import PropTypes from 'prop-types';

// Core
import { Box, Typography } from '@material-ui/core';

// Utils
import works from '../../utils/works.json';

const MarkdownInfo = ({ id }) => {
  const { title, type, date } = works[id];

  return (
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
          {type}
        </b>
      </Typography>
      <Typography variant="h2" paragraph align="center">
        {title}
      </Typography>
      <Typography variant="subtitle2" align="center">
        {date}
      </Typography>
    </Box>
  );
};

MarkdownInfo.propTypes = {
  id: PropTypes.string.isRequired
};

export default MarkdownInfo;

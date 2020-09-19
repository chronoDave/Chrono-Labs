import React from 'react';
import PropTypes from 'prop-types';

// Core
import { Box } from '@material-ui/core';

// Modules
import { Markdown } from '../modules';

const MarkdownPage = ({ id }) => (
  <Box
    px={2}
    pb={2}
    maxWidth={{ md: 720 }}
    mt={{ md: '-8px' }}
    mx={{ md: 'auto' }}
  >
    <Markdown id={id} />
  </Box>
);

MarkdownPage.propTypes = {
  id: PropTypes.string.isRequired
};

export default MarkdownPage;

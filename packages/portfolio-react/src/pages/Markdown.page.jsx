import React from 'react';
import PropTypes from 'prop-types';

// Core
import { Box } from '@material-ui/core';

// Modules
import { Markdown } from '../modules';

const MarkdownPage = ({ id }) => (
  <Box
    px={{ xs: 1, sm: 3 }}
    pb={2}
    maxWidth={{ md: 800 }}
    mt={{ md: '-8px', sm: 3, xs: 1 }}
    mx={{ md: 'auto' }}
  >
    <Markdown id={id} />
  </Box>
);

MarkdownPage.propTypes = {
  id: PropTypes.string.isRequired
};

export default MarkdownPage;

import React from 'react';
import PropTypes from 'prop-types';

// Core
import { Box } from '@material-ui/core';

// Modules
import { Markdown } from '../modules';

const MarkdownPage = ({ id }) => (
  <Box pt={1} p={4} mx="auto" maxWidth={720}>
    <Markdown id={id} />
  </Box>
);

MarkdownPage.propTypes = {
  id: PropTypes.string.isRequired
};

export default MarkdownPage;

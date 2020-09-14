import React, { useState, useEffect } from 'react';
import MarkdownToJsx from 'markdown-to-jsx';
import { get } from 'https';
import path from 'path';
import PropTypes from 'prop-types';

// Core
import { Box } from '@material-ui/core';

// Private
import MarkdownHeader from './MarkdownHeader.private';
import MarkdownImage from './MarkdownImage.private';
import MarkdownListItem from './MarkdownListItem.private';

const Markdown = ({ id }) => {
  const [file, setFile] = useState('');

  useEffect(() => {
    get(path.resolve('assets/markdown', `${id}.md`), res => {
      const { statusCode } = res;

      if (statusCode === 200) {
        const chunks = [];

        res.on('data', chunk => chunks.push(chunk));
        res.on('end', () => setFile(chunks.join('')));
      } else {
        setFile('Failed to fetch');
      }
    });
  }, [id]);

  return (
    <MarkdownToJsx
      options={{
        overrides: {
          h1: {
            component: MarkdownHeader,
            props: { variant: 'h1' }
          },
          h2: {
            component: MarkdownHeader,
            props: { variant: 'h2' }
          },
          h3: {
            component: MarkdownHeader,
            props: { variant: 'h3' }
          },
          h4: {
            component: MarkdownHeader,
            props: { variant: 'h4' }
          },
          h5: {
            component: MarkdownHeader,
            props: { variant: 'h5' }
          },
          h6: {
            component: MarkdownHeader,
            props: { variant: 'h6' }
          },
          img: MarkdownImage,
          box: {
            component: Box,
            props: { p: 2 }
          },
          li: MarkdownListItem
        }
      }}
    >
      {file}
    </MarkdownToJsx>
  );
};

Markdown.propTypes = {
  id: PropTypes.string.isRequired
};

export default Markdown;

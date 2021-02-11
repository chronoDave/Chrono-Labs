import React from 'react';

// Core
import { Block, Markdown, MarkdownProps } from '../../components';

// Styles
import classes from './PageMarkdown.styles';

export interface PageMarkdownProps extends MarkdownProps {}

const PageMarkdown = ({ id }: PageMarkdownProps) => (
  <Block
    background="fadeInverse"
    width="md"
    className={classes.root}
  >
    <Markdown id={id} />
  </Block>
);

export default PageMarkdown;

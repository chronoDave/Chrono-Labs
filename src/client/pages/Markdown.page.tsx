import React from 'react';

// Core
import { Block, Markdown } from '../components';

export interface MarkdownPageProps {
  id: string
}

const MarkdownPage = ({ id }: MarkdownPageProps) => (
  <Block background="fadeInverse" width="md">
    <Markdown id={id} />
  </Block>
);

export default MarkdownPage;

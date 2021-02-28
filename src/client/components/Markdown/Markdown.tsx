import React, { useState, useEffect } from 'react';
import Mdsx from 'markdown-to-jsx';

// Core
import { Typography } from '../Typography';
import { Link } from '../Link';

// Styles
import classes from './Markdown.styles';

export interface MarkdownProps {
  id: string
}
const Markdown = ({ id }: MarkdownProps) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`assets/markdown/${id}.md`)
      .then(res => {
        if (res.status === 200) return res.text();
        throw new Error(`[${res.status}] Failed to fetch: ${id}`);
      })
      .then(text => {
        if (text.includes('<!DOCTYPE html>')) {
          setContent(`Could not find: ${id}.md`);
        } else {
          setContent(text);
        }
      })
      .catch(err => setContent(err.message));
  }, [id]);

  return (
    <Mdsx
      options={{
        overrides: {
          h1: {
            component: Typography,
            props: { variant: 'h1', gutterBottom: true }
          },
          h2: {
            component: Typography,
            props: { variant: 'h2', gutterBottom: true }
          },
          h3: {
            component: Typography,
            props: { variant: 'h3', gutterBottom: true }
          },
          h4: {
            component: Typography,
            props: { variant: 'h4', gutterBottom: true }
          },
          h5: {
            component: Typography,
            props: { variant: 'h5', gutterBottom: true }
          },
          h6: {
            component: Typography,
            props: { variant: 'h6', gutterBottom: true }
          },
          p: {
            component: Typography,
            props: { gutterBottom: true }
          },
          caption: {
            component: Typography,
            props: { variant: 'caption', gutterBottom: true }
          },
          hr: {
            component: 'hr',
            props: { className: classes.hr }
          },
          li: {
            component: Typography,
            props: { component: 'li', className: classes.li }
          },
          a: {
            component: Link,
            props: { underline: true }
          },
          i: {
            component: Typography,
            props: { component: 'i', variant: 'caption' }
          },
          img: {
            component: ({ title, alt, src }) => (
              <div className={classes.imgRoot}>
                <img className={classes.img} title={title} alt={alt} src={src} />
                {alt && (
                  <Typography variant="caption" gutterBottom className={classes.imgCaption}>
                    {alt}
                  </Typography>
                )}
              </div>
            )
          },
          video: {
            component: 'video',
            props: { className: classes.video }
          }
        }
      }}
    >
      {content}
    </Mdsx>
  );
};

export default Markdown;

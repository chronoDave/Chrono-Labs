import React, { useState, useEffect } from 'react';
import Mdsx from 'markdown-to-jsx';

// Core
import { Typography } from '../Typography';
import { Link } from '../Link';
import { Persona } from '../Persona';

// Styles
import classes from './Markdown.styles';

export interface MarkdownProps {
  id: string
}
const Markdown = ({ id }: MarkdownProps) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`markdown/${id}.md`)
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
            props: { variant: 'h1' }
          },
          h2: {
            component: Typography,
            props: { variant: 'h2' }
          },
          h3: {
            component: Typography,
            props: { variant: 'h3', className: classes.h3 }
          },
          h4: {
            component: Typography,
            props: { variant: 'h4' }
          },
          h5: {
            component: Typography,
            props: { variant: 'h5', className: classes.h5 }
          },
          h6: {
            component: Typography,
            props: { variant: 'h6', className: classes.h6 }
          },
          p: {
            component: Typography,
            props: { className: classes.p }
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
            component: 'img',
            props: { className: classes.img }
          },
          video: {
            component: 'video',
            props: { className: classes.video }
          },
          Persona: {
            component: ({ children, ...rest }) => (
              <div className={classes.persona}>
                <Persona {...rest} />
                <div className={classes.personaBody}>
                  {children}
                </div>
              </div>
            )
          }
        }
      }}
    >
      {content}
    </Mdsx>
  );
};

export default Markdown;

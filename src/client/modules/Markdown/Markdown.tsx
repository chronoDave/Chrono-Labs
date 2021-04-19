import m from 'mithril';
import { mtx, Mtx } from 'mtx';
import snarkdown from 'snarkdown';

import { Block } from '../../components';

import './Markdown.scss';

export interface MarkdownProps {
  id?: string
}

export class Markdown extends Mtx<MarkdownProps> {
  private data = 'Loading...';

  oninit(v: m.Vnode<MarkdownProps>) {
    const id = v.attrs.id || m.route.get().split('/').pop();

    m.request({
      url: `/assets/markdown/${id}.md`,
      responseType: 'text'
    }).then(data => {
      if (typeof data === 'string') {
        this.data = snarkdown(data)
          .replace(/^-{3,}/gm, '<hr />')
          .replace(/^\w.*/gm, match => `<p>${match}</p>`)
          .replace(/(\n\s*-)(?:(?!\n<).)*/s, match => `<ul>${match}</ul>`)
          .replace(/^([^\n]\s*-)([^\n]*)/gm, (_, __, p2) => `<li>${p2}</li>`);
      }
    }).catch(err => {
      this.data = err.message;
    });
  }

  view() {
    return (
      <Block className="markdown" maxWidth="md" background="fillInverse">
        {m.trust(this.data)}
      </Block>
    );
  }
}

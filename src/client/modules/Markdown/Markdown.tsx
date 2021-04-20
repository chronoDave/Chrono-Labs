import m from 'mithril';
import { mtx, Mtx } from 'mtx';
import snarkdown from 'snarkdown';

import { Block } from '../../components';

import './Markdown.scss';

export interface MarkdownProps {
  id?: string
}

export class Markdown extends Mtx<MarkdownProps> {
  private data = snarkdown('<p>Loading...</p>');

  fetch(id?: string) {
    m.request({
      url: `/assets/markdown/${id || m.route.get().split('/').pop()}.md`,
      responseType: 'text'
    }).then(data => {
      if (typeof data === 'string') {
        this.data = snarkdown(data)
          .replace(/^-{3,}/gm, '<hr />')
          .replace(/^([\u3000-\u30ff]|[\u4e00-\u9faf]|\w).*/gm, match => `<p>${match}</p>`)
          .replace(/(\n\s*-)(?:(?!\n<).)*/s, match => `<ul>${match}</ul>`)
          .replace(/^([^\n]\s*-)([^\n]*)/gm, (_, __, p2) => `<li>${p2}</li>`);

        window.scrollTo(0, 0);
      }
    }).catch(err => {
      this.data = err.message;
    });
  }

  oninit(v: m.Vnode<MarkdownProps>) {
    this.fetch(v.attrs.id);
  }

  onbeforeupdate(v: m.Vnode<MarkdownProps>, o: m.VnodeDOM<MarkdownProps>) {
    this.fetch(v.attrs.id);
  }

  view() {
    return (
      <Block fullHeight className="markdown" maxWidth="md" background="fillInverse">
        {m.trust(this.data)}
      </Block>
    );
  }
}

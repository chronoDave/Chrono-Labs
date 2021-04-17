import m from 'mithril';
import { Mtx } from 'mtx';
// import Markdown from 'markdown-it';
// import Markdown from 'marked';
import snarkdown from 'snarkdown';

export interface MarkdownPageProps {
  id: string
}

export class MarkdownPage extends Mtx<MarkdownPageProps> {
  // private parser = new Markdown({ html: true, linkify: true });

  oninit({ attrs }: m.Vnode<MarkdownPageProps>) {
    const element = document.getElementsByClassName('page')[0];

    m.request({
      url: `/assets/markdown/${attrs.id}.md`,
      responseType: 'text'
    }).then(data => {
      if (typeof data === 'string') {
        element.innerHTML = snarkdown(data)
          .replace(/^-{3,}/gm, '<hr />')
          .replace(/^\w.*/gm, match => `<p>${match}</p>`);
      }
    }).catch(err => {
      element.innerHTML = 'Page not found';
    });
  }

  onremove() {
    document.getElementsByClassName('page')[0].innerHTML = '';
  }

  view() {}
}

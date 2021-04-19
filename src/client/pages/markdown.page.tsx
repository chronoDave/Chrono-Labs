import m from 'mithril';
import { Mtx } from 'mtx';
import snarkdown from 'snarkdown';

export interface MarkdownPageProps {
  id: string
}

export class MarkdownPage extends Mtx<MarkdownPageProps> {
  oninit({ attrs }: m.Vnode<MarkdownPageProps>) {
    const element = document.getElementsByClassName('page')[0];

    m.request({
      url: `/assets/markdown/${attrs.id}.md`,
      responseType: 'text'
    }).then(data => {
      if (typeof data === 'string') {
        element.innerHTML = snarkdown(data)
          .replace(/^-{3,}/gm, '<hr />')
          .replace(/^\w.*/gm, match => `<p>${match}</p>`)
          .replace(/(\n\s*-)(?:(?!\n<).)*/s, match => `<ul>${match}</ul>`)
          .replace(/^([^\n]\s*-)([^\n]*)/gm, (_, __, p2) => `<li>${p2}</li>`);
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

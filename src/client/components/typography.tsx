import m from 'mithril';
import { MithrilTsxComponent as Component } from 'mithril-tsx-component';

export interface TypographyProps {
  component: string
}

type Vnode = m.Vnode<TypographyProps, Typography>;

export class Typography extends Component<TypographyProps> {
  view({ children, attrs }: Vnode) {
    return m(attrs.component, {}, children);
  }
}

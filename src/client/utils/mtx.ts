import m from 'mithril';

declare global {
  namespace mtx {
    namespace JSX {
      interface IntrinsicElements {
        [key: string]: object
      }

      interface Element<A = {}, S = {}> extends m.Vnode<A, S> {}

      interface ElementAttributesProperty<A> {
        __tsx_attrs: object
      }
    }
  }
}

export abstract class Mtx<A = {}> implements m.ClassComponent<A> {
  // @ts-ignore
  private __tsx_attrs!: A;

  abstract view(v: m.Vnode<A, this>): m.Children | null | void;
}

export const mtx = m;

import m from 'mithril';
import { mtx, Mtx } from 'mtx';

import './Persona.scss';

export interface PersonaProps {
  type: 'happy' | 'sad' | 'smug' | 'wink'
}

export class Persona extends Mtx<PersonaProps> {
  view({ attrs }: m.Vnode<PersonaProps>) {
    const { type } = attrs;

    return (
      <img
        className="persona"
        src={`/assets/images/${type}@6x.png`}
        alt={`Avatar ${type}`}
        width={240}
        height={240}
      />
    );
  }
}

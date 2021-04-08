/* eslint-disable max-classes-per-file */
import m from 'mithril';
import { MithrilTsxComponent as Component } from 'mithril-tsx-component';

// Components
import { Typography } from '../components';

class Test extends Component<{}> {
  view() {
    return <div>a</div>;
  }
}

export class HomePage extends Component<{}> {
  view() {
    return (
      <Typography component={Test} yeet="a">
        A
      </Typography>
    );
  }
}

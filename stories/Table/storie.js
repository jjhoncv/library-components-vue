import { storiesOf } from '@storybook/vue';

import TableDefault from './Table.default';
import TableOptions from './Table.options';

import { withKnobs } from '@storybook/addon-knobs';

storiesOf('Tables', module)
  .addDecorator(withKnobs)
  .add('Table Default', TableDefault())
  .add('Table Options', TableOptions());

import { storiesOf } from '@storybook/vue';
import ButtonDefault from './Button.default';

import { withKnobs } from '@storybook/addon-knobs';

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add('Button Default', ButtonDefault());

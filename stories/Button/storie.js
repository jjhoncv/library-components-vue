import { storiesOf } from '@storybook/vue';

import ButtonDefault from './Button.default';
import ButtonDanger from './Button.danger';
import ButtonInfo from './Button.info';
import ButtonPrimary from './Button.primary';
import ButtonSuccess from './Button.success';
import ButtonWarning from './Button.default';

import { withKnobs } from '@storybook/addon-knobs';

import * as readme from './Button.md';
import { withDocs } from 'storybook-readme';

storiesOf('Buttons', module)
  //   .addDecorator(withKnobs)
  .addDecorator(withDocs(readme))
  .add('Button Default', ButtonDefault);
//   .add('Button Primary', ButtonPrimary)
//   .add('Button Danger', ButtonDanger)
//   .add('Button Info', ButtonInfo)
//   .add('Button Success', ButtonSuccess)
//   .add('Button Warning', ButtonWarning);

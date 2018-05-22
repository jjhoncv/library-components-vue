import Button from './../../src/components/button/Button.vue';

import { text } from '@storybook/addon-knobs/vue';

export default () => {
  const className = text('className', 'btn-success');
  const value = text('value', 'button success');

  return {
    components: { Button },
    template: `<Button className="${className}">${value}</Button>`
  };
};

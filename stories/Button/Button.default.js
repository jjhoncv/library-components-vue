import WrapperButton from './../../src/containers/WrapperButton.vue';

import { text } from '@storybook/addon-knobs/vue';

export default () => {
  return {
    components: { WrapperButton },
    template: '<WrapperButton/>'
  };
};

import Button from './../../src/components/Button';

import { withDocs } from 'storybook-readme';
import * as readme from './Button.default.md';

const Wrapper = `<div>
                    <Button type="primary"> Hello Button primary </Button>
                    <Button type="default"> Hello Button danger </Button>
                    <Button type="danger"> Hello Button danger </Button>
                    <Button type="info"> Hello Button info </Button>
                    <Button type="success"> Hello Button success </Button>
                    <Button type="warning"> Hello Button warning </Button>
                  </div>`;

const Component = () => {
  return {
    components: { Button },
    template: Wrapper
  };
};

export default () => {
  return withDocs(readme, Component);
};

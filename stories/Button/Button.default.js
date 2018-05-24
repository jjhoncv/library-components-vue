import Button from './../../src/components/Button';

import { withDocs } from 'storybook-readme';
import * as readme from './Button.default.md';

const Wrapper = `<div>
                    <Button className="btn-primary"> Hello Button primary </Button>
                    <Button className="btn-default"> Hello Button danger </Button>
                    <Button className="btn-danger"> Hello Button danger </Button>
                    <Button className="btn-info"> Hello Button info </Button>
                    <Button className="btn-success"> Hello Button success </Button>
                    <Button className="btn-warning"> Hello Button warning </Button>
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

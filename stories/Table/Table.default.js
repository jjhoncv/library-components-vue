import Table from './../../src/components/Table';
import { array, text, date } from '@storybook/addon-knobs';
import { withDocs } from 'storybook-readme';
import * as readme from './Table.default.md';

const tableData = [
  {
    id: 0,
    name: 'Victor Morales',
    mail: 'victor.morales@gmail.com',
    age: 25,
    city: 'Huacho'
  },
  {
    id: 1,
    name: 'Jhon Castro',
    mail: 'jhon.castro@gmail.com',
    age: 22,
    city: 'Huacho'
  },
  {
    id: 2,
    name: 'Jhonnatan Castro',
    mail: 'jhonnatan.castro@gmail.com',
    age: 19,
    city: 'Lima'
  }
];

const columns = ['id', 'name', 'mail', 'age', 'city'];

const Wrapper = '<Table :data="data" :columns="columns"/>';

const Component = () => {
  return {
    components: { Table },
    template: Wrapper,
    data() {
      return {
        data: tableData,
        columns: columns
      };
    }
  };
};

export default () => {
  return withDocs(readme, Component);
};

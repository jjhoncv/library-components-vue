# Table

```js
import { Table } from "library-components-vue";
```

```html
<Table :data="tableData" :columns="columns"/>
```

## Propiedades

### `data: Array`

```js
const tableData = [
  {
    id: 0,
    name: "Victor Morales",
    mail: "victor.morales@gmail.com",
    age: 25,
    city: "Huacho"
  },
  {
    id: 1,
    name: "Jhon Castro",
    mail: "jhon.castro@gmail.com",
    age: 22,
    city: "Huacho"
  },
  {
    id: 2,
    name: "Jhonnatan Castro",
    mail: "jhonnatan.castro@gmail.com",
    age: 19,
    city: "Lima"
  }
];
```

### `columns: Array`

```js
const columns = ["id", "name", "mail", "age", "city"];
```

<!-- STORY -->

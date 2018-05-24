# Table

```js
import { Table } from "library-components-vue";
import { Button } from "library-components-vue";
```

```html
<Table :data="data">
  <template slot="columns">
      <div class="table-column">Id</div>
      <div class="table-column">Name</div>
      <div class="table-column">Email</div>
      <div class="table-column">Age</div>
      <div class="table-column">City</div>
      <div class="table-column">Option</div>
  </template>

  <template slot-scope="{row}">
      <div class="table-column">{{row.id}}</div>
      <div class="table-column">{{row.name}}</div>
      <div class="table-column">{{row.mail}}</div>
      <div class="table-column">{{row.age}}</div>
      <div class="table-column">{{row.city}}</div>
      <div class="table-column">
          <Button className="btn-primary">Edit</Button>
          <Button className="btn-danger">Delete</Button>
      </div>
  </template>
</Table>
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

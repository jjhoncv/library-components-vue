// import Button from "./Button";
// import Table from "./Table";

// export default {
//   Button,
//   Table
// };

const Button = require('./components/Button');
const Table = require('./components/Table');

module.exports = {
  Button: Button['default'],
  Table: Table['default']
};

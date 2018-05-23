const packageJSON = require('./../package.json');
const fs = require('fs');
const path = require('path');

delete packageJSON.devDependencies;
delete packageJSON.scripts;
delete packageJSON.repository;

fs.writeFileSync(
  './dist/package.json',
  `${JSON.stringify(packageJSON, null, 2)}`
);

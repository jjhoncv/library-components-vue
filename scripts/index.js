const packageJSON = require('./../package.json');
const fs = require('fs');
const path = require('path');
// const srcFolder = "./src/";

// fs.readdir(srcFolder, (err, files) => {
//   files.forEach(file => {

//   });
// });

delete packageJSON.devDependencies;
delete packageJSON.scripts;
delete packageJSON.repository;

fs.writeFileSync(
  './dist/package.json',
  `${JSON.stringify(packageJSON, null, 2)}`
);

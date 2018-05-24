function toObject(paths) {
  var ret = {};

  paths.forEach(function(path) {
    ret[`components/${path.split('/').slice(-2)[0]}`] = path;
  });

  return ret;
}
module.exports = toObject;

// determine what set of keys/credentials to return (dev or prod)
if (process.env.NODE_ENV === 'production') {
  // return prod keys
  module.exports = require('./prod');
} else {
  // return dev keys
  module.exports = require('./dev');
}

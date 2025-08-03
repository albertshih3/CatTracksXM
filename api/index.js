// api/index.js (or your preferred file name)
const app = require('./index.js');

module.exports = async (req, res) => {
  await app(req, res); 
};

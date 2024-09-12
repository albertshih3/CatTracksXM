// api/index.js
const app = require('../index');

module.exports = async (req, res) => {
  await app(req, res); 
};
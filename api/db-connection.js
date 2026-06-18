const mongoose = require('mongoose');
const config = require('../config');

mongoose.connect(config.MONGO_URI, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Successfully connected to ${config.MONGO_URI}`);
}).catch((err) => {
  throw err;
});

module.exports = mongoose;
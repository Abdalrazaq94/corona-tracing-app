const mongoose = require('mongoose');
const config = require('../config');

mongoose.connect(config.MONGO_URI, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, function(err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${config.MONGO_URI}`);
  }
});

module.exports = mongoose;
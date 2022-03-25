var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/demo', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (!err)
  {
    console.log('Database Connection Successfull');
  }
  else
  {
    console.log('Error in Connection',+err);
  }

});

module.exports = mongoose;

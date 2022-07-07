const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://demoUser:demoUser123@cluster0.1leui.mongodb.net/influx-project?retryWrites=true&w=majority"
    
  );
};

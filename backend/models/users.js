const mongoose = require("./db.js");

const users = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password:{
    type: String
  }
});

module.exports = mongoose.model("Users", users)
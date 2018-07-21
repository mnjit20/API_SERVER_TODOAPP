const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create profile schema
const ToDoSchema = new Schema({
  key: {
    type: Number
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  text: {
    type: String
  },
  complete: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Todo = mongoose.model("todo", ToDoSchema);
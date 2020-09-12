const mongoose = require("mongoose");

// schema
const todoSchema = mongoose.Schema({
  todo: {
    type: String,
  },
  status: {
    type: Boolean,
  },
});

const todoModel = mongoose.model("Todo", todoSchema);

module.exports = todoModel;

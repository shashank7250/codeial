const mongoose = require('mongoose');




const TodoSchema = new mongoose.Schema({
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  });
  const Todo = mongoose.model('Todo', TodoSchema);
  // schema is exported
  module.exports = Todo;
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tasks: {
    type: [String],
    default: [],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  date: {
    type: Date,
    default: Date.now(),
  },
})

exports.todoSchema = schema
exports.TodoList = mongoose.model('TodoList', schema)

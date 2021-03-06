const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const schema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    minlength: 3,
    maxlength: 55,
    required: true,
  },
  hash: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  isAdmin: Boolean,
})

schema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin },
    process.env.JWT_PRIVATE_KEY
  )

  return token
}

module.exports = mongoose.model('User', schema)

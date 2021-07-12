const mongoose = require('mongoose')

const walletSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  crypto: {
    type: String,
    minlength: 1,
    maxlength: 200
  },
  walletAddress: String,
  balance: {
    type: Number,
    min: 1,
    max: 1000000000
  },
})

module.exports = mongoose.model('wallets', walletSchema)

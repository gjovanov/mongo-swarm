const mongoose = require('mongoose')
const Schema = mongoose.Schema

const logSchema = new Schema({}, {
    timestamps: true
  })
  // logSchema.index({ "createdAt": 1 })
module.exports = logSchema

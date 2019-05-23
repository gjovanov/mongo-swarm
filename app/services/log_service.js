const mongoose = require('mongoose')
const logSchema = require("../models/log")
const config = require('../config')

class LogService {
  async write() {
    return new Promise((resolve, reject) => {
      const db = mongoose.createConnection(config.db, {
        family: 4,
        useNewUrlParser: true
      })
      mongoose.set('useCreateIndex', true)
      const logModel = db.model("logs", logSchema)
      return logModel.create({}, (err, result) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
        db.close()
      })
    })
  }

  async read(size = 10) {
    return new Promise((resolve, reject) => {
      const db = mongoose.createConnection(config.db, {
        family: 4,
        useNewUrlParser: true
      })
      const query = {

      }
      const logModel = db.model("logs", logSchema)
      return logModel.find({})
        .sort({ "createdAt": "desc" })
        .limit(parseInt(size))
        .exec((err, result) => {
          if (err) {
            reject(new Error(err))
          } else {
            resolve(result)
          }
          db.close()
        })
    })
  }
}

module.exports = new LogService()

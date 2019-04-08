const mongoose = require('mongoose')
const logSchema = require("../models/log")
const { performance } = require('perf_hooks')

class LogService {
  async write() {
    return new Promise((resolve, reject) => {
      console.log('conn S', performance.now())
      const db = mongoose.createConnection('mongodb://localhost:27017/log', { useNewUrlParser: true })
      console.log('conn E', performance.now())
        //   mongoose.set('useCreateIndex', true)
        // const db = mongoose.createConnection('mongodb://m-01:27017,m-02:27017', { useNewUrlParser: true })
      const logModel = db.model("logs", logSchema)
      console.log('model', performance.now())
      return logModel.create({}, (err, result) => {
        console.log('create', performance.now())
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

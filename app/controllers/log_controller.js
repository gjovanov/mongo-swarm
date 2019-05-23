const express = require('express')
const logRoutes = express.Router()
const logService = require('../services/log_service')
const { performance } = require('perf_hooks')

logRoutes.post("/write", async(req, res) => {
  console.log('start', performance.now())
  const result = await logService.write()
  console.log('end', performance.now())
  res.send(result)
})

logRoutes.get("/read", async(req, res) => {
  console.log('start', performance.now())
  const result = await logService.read(req.query.size || 10)
  console.log('end', performance.now())
  res.send(result)
})

module.exports = logRoutes

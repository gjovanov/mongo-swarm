const express = require('express')
const logRoutes = express.Router()
const logService = require('../services/log_service')
const { performance } = require('perf_hooks')

logRoutes.post("/write", async(req, res) => {
  console.log('performance', performance.now())
    // performance.mark('Beginning sanity check')
  const result = await logService.write()
    // performance.mark('Ending sanity check')
    // performance.measure('Inputs validation', 'Beginning sanity check', 'Ending sanity check')

  console.log('performance', performance.now())
    //   // insert here
    // const measurements = performance.getEntriesByType('measure')
    // measurements.forEach(measurement => {
    //   // I'm going to make the logs colour-coded, in this case I'm using Green
    //   debug('\x1b[32m%s\x1b[0m', measurement.name + ' ' + measurement.duration)
    // })
  res.send(result)
})

module.exports = logRoutes

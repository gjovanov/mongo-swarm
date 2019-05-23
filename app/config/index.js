const env = process.env.NODE_ENV ? process.env.NODE_ENV.replace(" ", "") : 'development'
console.log("Loading configuration for environment : " + env)

var config = require('./config.' + env)
module.exports = config

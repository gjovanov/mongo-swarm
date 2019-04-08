const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const express = require('express')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(cookieParser())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE")
  res.header("Access-Control-Allow-Headers", "origin, content-type, Authorization")
  res.header("Content-Type", "application/json")
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next()
  }
})

// API routes
const apiRoutes = express.Router()
apiRoutes.use('/log', require('./controllers/log_controller'))
app.use('/api', apiRoutes)

app.listen(process.env.PORT || 8080);

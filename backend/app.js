const express = require("express")
const cors = require("cors")
const riotCalls = require("./routes/riot")
const app = express()
app.use(express.json())
app.use(cors())
app.use("/riot", riotCalls)

app.use((error, req, res, next) => {
    const status = error.status || 500
    const message = error.message
  
    return res.status(status).json({
      error: { message, status },
    })
  })
  

app.get('/', (req, res, next) => {
    return res.status(200).json({ server: "alive", all: "good"})
})
  module.exports = app


const express = require('express')
const router = require("./routes/route")
const app = express()

app.use("/api", router)

module.exports = app
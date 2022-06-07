require('dotenv').config()
const express = require("express")

const app = express()

app.get('/', (req,res) => res.json({msg:"espero que esto funcione"}))

const port = process.env.PORT || 3000

app.listen(port,() => console.log(`http:localhost:${port}/`))
const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const port = process.env.PORT || 4000

app.use(cors())

app.use("/api", require("./routes/newsRoute"))

app.listen(port, ()=>{
    console.log(`The server is running in port ${port}`);
})


// 1. IMPORTS
const express		= require("express")
const app			= express()
const connectDB		= require("./config/db")
const cors			= require("cors")

// 2. MIDDLEWARES
require("dotenv").config()
connectDB()

app.use(cors())

app.use(express.json({extended: true}))

// 3. ROUTES
app.use("/api/users", require("./routes/users"))
app.use("/api/comentarios", require("./routes/comentarios"))
//app.use("/api/tacos", require("./routes/tacos"))
app.use("/", require("./routes/index"))


// 4. SERVER
app.listen(process.env.PORT, () => console.log(`Active server on port  ${process.env.PORT}`))










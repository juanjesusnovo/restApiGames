const express = require("express")
const v1GameRouter = require("./v1/routes/gameRoutes")
const v1UserRouter = require("./v1/routes/userRoutes")
const v1GameStashRouter = require("./v1/routes/gameStashRoutes")
var cors = require('cors')
const app = express()

app.use(cors())


const PORT = process.env.PORT || 3000

app.use(express.json())

app.use("/api/v1/games", v1GameRouter)
app.use("/api/v1/users", v1UserRouter)
app.use("/api/v1/gamestash", v1GameStashRouter)

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
})
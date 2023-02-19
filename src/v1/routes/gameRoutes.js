const express = require("express")
const router = express.Router()
const gameController = require("../../controllers/gameController")

router
    .get("/", gameController.getAllGames)
    .get("/rating", gameController.getGameByRating)
    .get("/:gameId", gameController.getGameById)

module.exports = router
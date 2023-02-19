const express = require("express")
const router = express.Router()
const gameStashController = require("../../controllers/gameStashController")

router
    .get("/", gameStashController.getAllGames)
    .delete("/:gameId", gameStashController.deleteGameById)
    .post("/", gameStashController.addNewGame)

module.exports = router
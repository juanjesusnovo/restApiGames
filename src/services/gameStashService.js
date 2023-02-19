const db = require("../database/userGames.json")
const GameStash = require("../database/GameStash")

const getAllGames = (filterParam) => {
    const allGames = GameStash.getAllGames(filterParam)
    return allGames
}
const deleteGameById = (gameId) => {
    GameStash.deleteUserById(gameId)
}
const addNewGame = (newGame) => {
    const gameAdded = GameStash.addNewGame(newGame)
    return gameAdded
}

module.exports = {
    getAllGames,
    deleteGameById,
    addNewGame
}
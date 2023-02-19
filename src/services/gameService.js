const db = require("../database/allGames.json")
const Game = require("../database/Game")

const getAllGames = (filterParam) => {
    const allGames = Game.getAllGames(filterParam)
    return allGames
}
const getGameById = (gameId) => {
    const game = Game.getGameById(gameId)
    return game
}
const getGameByRating = () => {
    const gamesByRating = Game.getGameByRating()
    return gamesByRating
}

module.exports = {
    getAllGames,
    getGameById,
    getGameByRating
}
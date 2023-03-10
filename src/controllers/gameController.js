const gameService = require("../services/gameService")

const getAllGames = (req, res) => {
    const { platforms, genres, tags } = req.query

    const allGames = gameService.getAllGames({ platforms, genres, tags })
    res.send({status: "ok", data: allGames })
}

const getGameById = (req, res) => {
    const { params: { id }, } = req

    if(!id){ return }

    const game = gameService.getGameById(id)
    res.send({status : "ok", data: game})
}

const getGameByRating = (req, res) => {
    const gamesByRating = gameService.getGameByRating()
    res.send({status: "ok", data: gamesByRating})
}


module.exports = {
    getAllGames,
    getGameById,
    getGameByRating
}
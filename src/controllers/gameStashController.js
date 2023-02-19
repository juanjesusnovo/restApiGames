const gameStashService = require("../services/gameStashService")
const userController = require("./userController")

const getAllGames = (req, res) => {
    const { platforms, genres, tags } = req.query

    const allGames = gameStashService.getAllGames({ platforms, genres, tags })
    res.send({status: "ok", data: allGames })
}

const deleteGameById = (req, res) => {
    const { params: {gameId} } = req

    if(!gameId){ return }

    gameStashService.deleteGameById(gameId)
    res.send({ status: "ok" })
}

const addNewGame = (req, res) => {
    const { body } = req
    const newGame = {
        userId: body.userId,
        id: body.id,
        game_name: body.game_name,
        game_title: body.game_title,
        released: body.released,
        rating: body.rating,
        image: body.image,
        platforms: body.platforms,
        genres: body.genres,
        tags: body.tags
    }
    if(userController.getUserById(body.userId).status === "ok"){
        const gameAdded = gameStashService.addNewGame(newGame)
        res.status(201).send({status: "ok", data: gameAdded})
    }
}

module.exports = {
    getAllGames,
    deleteGameById,
    addNewGame
}
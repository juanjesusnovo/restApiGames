const DB = require("./allGames.json")
const mongoosePaginate = require("mongoose-paginate-v2")

const getAllGames = (filterParam) => {
    let allGames = DB.games

    if(filterParam.platforms){ return DB.games.filter((game) => game.platforms.includes(filterParam.platforms.toLowerCase()))}
    if(filterParam.genres){ return DB.games.filter((game) => game.genres.includes(filterParam.genres))}
    if(filterParam.tags){ return DB.games.filter((game) => game.tags.includes(filterParam.tags))}
    
    return allGames
}

const getGameById = (gameId) => {
    const game = DB.games.find((game) => game.id === gameId)
    if(!game){ return }
    return game
}

const getGameByRating = () => {
    const gamesBestRated = DB.games.sort(((a, b) => a.rating > b.rating))
    return gamesBestRated
}

module.exports = {
    getAllGames,
    getGameById,
    getGameByRating
}
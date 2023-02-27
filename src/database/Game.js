const db = require("./allGames.json")

const getAllGames = (filterParam) => {
    let allGames = db.games

    if(filterParam.platforms){ return db.games.filter((game) => game.platforms.includes(filterParam.platforms.toLowerCase()))}
    if(filterParam.genres){ return db.games.filter((game) => game.genres.includes(filterParam.genres))}
    if(filterParam.tags){ return db.games.filter((game) => game.tags.includes(filterParam.tags))}
    
    return allGames
}

const getGameById = (id) => {
    if(!id){ return }
    const idOk = parseInt(id)
    const game = db.games.find((game) => game.id === idOk)
    return game
}

const getGameByRating = () => {
    const gamesBestRated = db.games.sort(((a, b) => a.rating > b.rating))
    return gamesBestRated
}

module.exports = {
    getAllGames,
    getGameById,
    getGameByRating
}
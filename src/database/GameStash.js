const db = require("./userGames.json")

const addNewGame = (newGame) => {
    const isAlreadyAdded = db.gameStash.newGame.userId.findIndex((game) => game.game_name === newGame.game_name) > -1
    if(isAlreadyAdded){return}
    db.gameStash.newGame.userId.push(newGame)
    saveToDb(db)
    return newGame
}

const getAllGames = (filterParam) => {
    let allGames = db.gameStash

    if(filterParam.platforms){ return database.filter((game) => game.platforms.includes(filterParam.platforms.toLowerCase()))}
    if(filterParam.genres){ return database.filter((game) => game.genres.includes(filterParam.genres))}
    if(filterParam.tags){ return database.filter((game) => game.tags.includes(filterParam.tags))}
    return allGames
}

const deleteGameById = (gameId) => {
    const userIndex = database.findIndex((game) => game.id === gameId)

    if(userIndex === -1){ return }

    database.splice(userIndex, 1)
    saveTodb(db)
}

module.exports = {
    getAllGames,
    deleteGameById,
    addNewGame
}
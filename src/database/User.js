const db = require("./users.json")
const { saveToDb } = require("./utils")

const createNewUser = (newUser) => {
    const isAlreadyAdded = db.users.findIndex((user) => user.name === newUser.name) > -1
    if(isAlreadyAdded){return}
    db.users.push(newUser)
    saveToDb(db)
    return newUser
}

const getAllUsers = () => {
    return db.users
}

const getUserById = (userId) => {
    const user = db.users.find((user) => user.id === userId)
    
    if(!user){ return }

    return user
}

const getUserByName = (userName) => {
    const user = db.users.find((user) => user.userName === userName)
    
    if(!user){ return }

    return user
}

const updateUserById = (userId, body) => {
    const userIndex = db.users.findIndex((user) => user.id === userId)

    if(userIndex === -1){ return }

    const updatedUser = {
        ...db.users[userIndex],
        ...body
    }

    db.users[userIndex] = updatedUser
    saveToDb(db)
    return updatedUser
} 

const deleteUserById = (userId) => {
    const userIndex = db.users.findIndex((user) => user.id === userId)

    if(userIndex === -1){ return }

    db.users.splice(userIndex, 1)
    saveToDb(db)
}

module.exports = {
    createNewUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    getUserByName
}
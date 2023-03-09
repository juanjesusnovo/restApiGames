const { v4: uuid } = require("uuid")
const User = require("../database/User")


const createNewUser = (newUser) => {
    const userToInsert = {
        ...newUser,
        id: uuid(),
        stash: []
    }
    const createdUser = User.createNewUser(userToInsert)
    return createdUser
}

const getAllUsers = ( filterParam ) => {
    const allUsers = User.getAllUsers( filterParam )
    return allUsers
}

const getUserById = (userId) => {
    const user = User.getUserById(userId)
    return user
}

const updateUserById = (userId, body) => {
    const updatedUser = User.updateUserById(userId, body)
    return updatedUser
}

const deleteUserById = (userId) => {
    User.deleteUserById(userId)
}

module.exports = {
    createNewUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
}
const userService = require("../services/userService")

const createNewUser = (req, res) => {
    const { body } = req
    const newUser = {
        userName: body.userName,
        name: body.name,
        userEmail: body.email,
        password: body.password
    }
    const createdUser = userService.createNewUser(newUser)
    res.status(201).send({status: "ok", data: createdUser})
}

const getAllUsers = (req, res) => {
    const allUsers = userService.getAllUsers()
    res.send({status: "ok", data: allUsers})
}

const getUserById = (req, res) => {
    const { params: {userId} } = req

    if(!userId){ return }

    const user = userService.getUserById(userId)
    res.send({status:"ok", data: user})
}

const getUserByName = (req, res) => {
    const { params: {userName} } = req

    if(!userName){ return }

    const user = userService.getUserByName(userName)
    res.send({status:"ok", data: user})
}

const updateUserById = (req, res) => {
    const { body,
        params: {userId}
    } = req

    if(!userId){ return }

    const updatedUser = userService.updateUserById(userId, body)
    res.send({status: "ok", data: updatedUser})
}

const deleteUserById = (req, res) => {
    const { params: {userId} } = req

    if(!userId){ return }

    userService.deleteUserById(userId)
    res.send({ status: "ok" })
}

module.exports = {
    createNewUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    getUserByName
}
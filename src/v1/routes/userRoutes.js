const express = require("express")
const router = express.Router()
const userController = require("../../controllers/userController")

router
    .post("/", userController.createNewUser)
    .get("/", userController.getAllUsers)
    .get("/:userId", userController.getUserById)
    /* .get("/:userName", userController.getUserByName)
    .patch("/:userId", userController.updateUserById)
    .delete("/:userId", userController.deleteUserById) */

module.exports = router
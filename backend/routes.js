const express = require("express")
const router = express.Router()
const UserController = require("./controllers/userControllers")

router.get("/user", UserController.getUser)
router.post("/user", UserController.insertUser)
router.put("/user", UserController.edittUser)
router.delete("/user/:id", UserController.deleteUser)

module.exports = router
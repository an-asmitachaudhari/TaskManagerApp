const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/email", userController.getUsers);
router.post("/addTask", userController.addTask);
router.post("/addNotes", userController.addNote);
//router.post("/addJewellery", userController.addJewellery);
//router.get("/category", userController.getcategory);
router.get("/getTask", userController.getTask);
router.get("/getNote", userController.getNote);

module.exports = router;

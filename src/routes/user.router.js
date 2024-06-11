const { getAll, createUser, getOne, deleteUser, updateUser } = require("../controllers/user.controllers");
const express = require("express");

const userRouter = express.Router();

//Static routes
userRouter.route("/").get(getAll).post(createUser);

//Dynamic routes
userRouter.route("/:id").get(getOne).delete(deleteUser).put(updateUser);

module.exports = userRouter;
const usersRouter = require("express").Router();
const { getUsers } = require("../controllers/users-controllers");
// /api/users

usersRouter.route("/").get(getUsers);

module.exports = usersRouter;

const User = require("../db/usersSchema");

exports.findUsers = async () => {
  try {
    const users = await User.find({});
    return users;
  } catch (error) {
    console.log(error);
  }
};

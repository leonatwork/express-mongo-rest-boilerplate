const User = require("../model/user-model");

const findAllUsers = async () => User.find({});

const findUserById = async (id) => User.findById(id);

const addUser = async (params) => {
  const { name, age } = params;
  const user = new User({ name, age });
  return await user.save();
};

const updateUser = async (id, params) => {
  const { name, age } = params;
  const user = await User.findOneAndUpdate({ _id: id }, { name, age });
  return user;
};

const deleteUser = async (id) => {
  return await User.findOneAndRemove({ _id: id });
};

module.exports = {
  findAllUsers,
  findUserById,
  addUser,
  updateUser,
  deleteUser,
};

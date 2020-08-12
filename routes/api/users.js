const express = require("express");
const router = express.Router();

const {
  findAllUsers,
  findUserById,
  addUser,
  updateUser,
  deleteUser,
} = require("../../database");

// GET : get all users
router.get("/", async (req, res) => res.send(await findAllUsers()));

// GET : get a user
router.get("/:id", async (req, res) => {
  const user = await findUserById(req.params.id);
  if (user) {
    res.send(user);
  } else {
    res.status(400).send("User NOT found");
  }
});

// POST : create a user
router.post("/", async (req, res) => {
  const user = await addUser(req.body);
  res.send(user);
});

// PUT : update a user
router.put("/:id", async (req, res) => {
  const user = await updateUser(req.params.id, req.body);
  if (user) {
    res.send(user);
  } else {
    res.status(400).send("User NOT found");
  }
});

// DELETE : delete a user
router.delete("/:id", async (req, res) => {
  const user = await deleteUser(req.params.id);
  if (user) {
    res.send(user);
  } else {
    res.status(400).send("User NOT found");
  }
});

module.exports = router;

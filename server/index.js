const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const {
  findAllUsers,
  findUserById,
  addUser,
  updateUser,
  deleteUser,
} = require("../database");

// Root
app.get("/", (req, res) => res.send("Hello World"));

// GET : get all users
app.get("/users", async (req, res) => res.send(await findAllUsers()));

// GET : get a user
app.get("/users/:id", async (req, res) =>
  res.send(await findUserById(req.params.id))
);

// POST : create a user
app.post("/users", async (req, res) => {
  const user = await addUser(req.body);
  res.send(user);
});

// PUT : update a user
app.put("/users/:id", async (req, res) => {
  const user = await updateUser(req.params.id, req.body);
  res.send(user);
});

// DELETE : delete a user
app.delete("/users/:id", async (req, res) => {
  const user = await deleteUser(req.params.id);
  res.send(user);
});

module.exports = app;

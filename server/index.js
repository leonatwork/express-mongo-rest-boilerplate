const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const {
  findAllTodos,
  findTodoById,
  addTodo,
  updateTodo,
  deleteTodo,
} = require("../database");

// Root
app.get("/", (req, res) => res.send("Hello World"));

// GET : get all todos
app.get("/todos", async (req, res) => res.send(await findAllTodos()));

// GET : get a todo
app.get("/todos/:id", async (req, res) =>
  res.send(await findTodoById(req.params.id))
);

// POST : create a todo
app.post("/todos", async (req, res) => {
  const todo = await addTodo(req.body);
  res.send(todo);
});

// PUT : update a todo
app.put("/todos/:id", async (req, res) => {
  const todo = await updateTodo(req.params.id, req.body);
  res.send(todo);
});

// DELETE : delete a todo
app.delete("/todos/:id", async (req, res) => {
  const todo = await deleteTodo(req.params.id);
  res.send(todo);
});

module.exports = app;

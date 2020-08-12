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

app.get("/", (req, res) => res.send("Hello World"));

app.get("/todos", async (req, res) => res.send(await findAllTodos()));

app.get("/todos/:id", async (req, res) =>
  res.send(await findTodoById(req.params.id))
);

app.post("/todos", async (req, res) => {
  const todo = await addTodo(req.body);
  res.send(todo);
});

app.put("/todos/:id", async (req, res) => {
  const todo = await updateTodo(req.params.id, req.body);
  res.send(todo);
});

app.delete("/todos/:id", async (req, res) => {
  const todo = await deleteTodo(req.params.id);
  res.send(todo);
});

module.exports = app;

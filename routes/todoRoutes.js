const express = require("express");
const router = express.Router();
const todoController = require("./../controller/todoController");
const {
  createTodo,
  getAllTodo,
  todoId,
  updateTodo,
  deleteTodo,
} = todoController;

router.route("/").post(createTodo).get(getAllTodo);
router.route("/:id").get(todoId).put(updateTodo).delete(deleteTodo);
module.exports = router;

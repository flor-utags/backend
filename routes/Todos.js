const express = required("express");
const { Router } = require("express");
const Todo = require("../models/Todo");
const router = express.Router();

router.get("/", async (req, res) => {
try {
    const todos = await Todo.find();
    res.json(todos); 
} catch (error) {
    res.status(500).send(error);
}
}); 

router.post("/", async (req, res) => {
    try {
const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed,
});
const todoSaved = todo.save();
res.json(todoSaved);

    } catch (error) {
        res.status(500).send(error);
    }
});
module.exports = router;

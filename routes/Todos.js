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


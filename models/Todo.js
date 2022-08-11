const mongoose = require("mongoose");

const TodoSchema = mongoose.Schemac[{
title: {
    type: String,
    required: true,
},
description: {
    type: String,
},
completed: {
    type: Boolean,
    required: true,
    default: false,
},
}];

module.exports = mongoose.model("todos", TodoSchema);
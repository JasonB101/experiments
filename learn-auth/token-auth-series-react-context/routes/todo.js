const express = require("express");
const todoRouter = express.Router();
const Todo = require("../models/todo");

todoRouter.get("/", (req, res, next) => {
    //searches todo collection for "documents" containing the authorized user's "ID"
    Todo.find({user: req.user._id}, (err, todos) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(todos);
    });
});

todoRouter.post("/", (req, res, next) => {
    const todo = new Todo(req.body);

    //Adding new propery to todo, which is the "id" of the "user" that express-jwt attatched to "req"
    //using the token you send in the Authorization header
    todo.user = req.user._id

    todo.save((err, newTodo) => { 
        console.log("We are getting here")
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(newTodo);
    });
});

todoRouter.get("/:todoId", (req, res, next) => {
    //Search collection for a document with a specific id, and also by the user id attached to it. 
    Todo.findById({_id: req.params.todoId, user: req.user._id}, (err, todo) => {
        if (err) {
            res.status(500);
            return next(err);
        } else if (!todo) {
            res.status(404)
            return next(new Error("No todo item found."));
        }
        return res.send(todo);
    });
});

todoRouter.put("/:todoId", (req, res, next) => {
    Todo.findByIdAndUpdate(
        {_id: req.params.todoId, user: req.user._id},
        req.body,
        { new: true },
        (err, todo) => {
            if (err) {
                console.log("Error");
                res.status(500);
                return next(err);
            }
            return res.send(todo);
        }
    );
});

todoRouter.delete("/:todoId", (req, res, next) => {
    Todo.findByIdAndRemove({_id: req.params.todoId, user: req.user._id}, (err, todo) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(todo);
    });
});

module.exports = todoRouter;

"use strict";

const express = require("express");
const cartItems = express.Router();

const array = [
    {
        id: 0,
        product: "Fish",
        price: 12,
        quantity: 1 
    },
    {
        id: 1,
        product: "Hummus",
        price: 6,
        quantity: 2
    },
    {
        id: 2,
        product: "Avocado",
        price: 4,
        quantity: 3
    }
]

cartItems.get("/cart-items", (req, res) => {
    res.send(array);
});

cartItems.post("/cart-items", (req, res) => {
    array.push(req.body);
    res.json(array);
});

cartItems.put("/cart-items/:id", (req, res) => {
    array.splice(req.params.id, 1);
    res.json(array);
});


cartItems.delete("/cart-items/:id", (req, res) => {
    array[rq.params.id] = req.body;
    res.json(array);
});

module.exports = cartItems;
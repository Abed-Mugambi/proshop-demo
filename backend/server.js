
import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import products from "./data/products.js";
const port = process.env.PORT || 5000;

// const port = 5000;

const app = express();

// route to test api
app.get("/", (req,res) => {
    res.send('api is running');
})

// route to get all products
app.get("/api/products", (req,res) => {
    res.json(products);
});

// route to get 1 product
app.get("/api/product/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id )
    res.json(product)
})

app.listen(port, () => console.log(`server on port ${port}`))

// npm run client frontend
// npm run server backend
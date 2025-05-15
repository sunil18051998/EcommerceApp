import express from "express";
import { Router } from "express";

const router = Router();

let products = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Product 1 description",
        quantity: 1
    },
    {
        id: 2,
        name: "Product 2",
        price: 200,
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Product 2 description",
        quantity: 1 
    },
    {
        id: 3,
        name: "Product 3",
        price: 300,
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Product 3 description",
        quantity: 1         
    },
    {
        id: 4,
        name: "Product 4",
        price: 400,
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Product 4 description",
        quantity: 1
    },
    {
        id: 5,
        name: "Product 5",
        price: 500,
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Product 5 description",
        quantity: 1
    }
]

router.post("/", (req, res) => {
    res.json({ message: "Order created successfully" });
});

router.get("/", (req, res) => {
    res.json(products);
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    products = products.filter(product => product.id !== Number(id));
    res.json({ message: "Order deleted successfully" });
});

export default router;


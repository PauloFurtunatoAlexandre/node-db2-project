const express = require("express");

const db = require("../../db-config.js");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const cars = await db("cars").then((cars) => {
            res.status(200).json(cars);
        });
    } catch {
        res.status(500).json({
            message: "could not retrieve cars from the database.",
        });
    }
});

router.post("/", async(req, res) => {
    const newCar = req.body;
    
    try {
        const car = await db("cars").insert(newCar);
        res.status(201).json(car);
    } catch {
        res.status(500).json({
            message: "could not add a new car to the database.",
        });
    }
})

module.exports = router;

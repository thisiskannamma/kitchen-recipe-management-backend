const express = require("express");
const router = express.Router();
const Recipe=require("../Models/recipe")


//GET/category/veg

router.get("/veg", async (req, res) => {
    try {
        const recipe=await Recipe.find({description:"vegetarian recipe"});
        res.json(recipe);
         } catch (error) {
        console.error(error.message);
        res.status(500).send("server error");
    }
});

//GET/category/non-veg

router.get("/non-veg", async (req, res) => {
    try {
        const recipe=await Recipe.find({description:"non-vegetarian recipe"});
        res.json(recipe);
         } catch (error) {
        console.error(error.message);
        res.status(500).send("server error");
    }
});

//GET/category/baked

router.get("/baked", async (req, res) => {
    try {
        const recipe=await Recipe.find({description:"Baked"});
        res.json(recipe);
         } catch (error) {
        console.error(error.message);
        res.status(500).send("server error");
    }
});

//GET/category/grilled

router.get("/grilled", async (req, res) => {
    try {
        const recipe=await Recipe.find({description:"Grilled recipe"});
        res.json(recipe);
         } catch (error) {
        console.error(error.message);
        res.status(500).send("server error");
    }
});

//GET/category/chilled

router.get("/chilled", async (req, res) => {
    try {
        const recipe=await Recipe.find({description:"chilled recipe"});
        res.json(recipe);
         } catch (error) {
        console.error(error.message);
        res.status(500).send("server error");
    }
});

module.exports = router;

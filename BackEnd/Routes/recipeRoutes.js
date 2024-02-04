const express = require("express");
const router = express.Router();
const Recipe=require("../Models/recipe")


//POST/recipe/create
router.post("/create", async (req, res) => {
    const { name,description,ingredients,instructions,userId,imageURL,notes} = req.body;
    try {
        let recipe = await Recipe.findOne({ name });
        if (recipe) {
            return res.status(400).json({ msg: "Recipe already exists" });
        }
        recipe = new Recipe({
            name,description,ingredients,instructions,userId,imageURL,notes
        });
        await recipe.save();
        res.status(200).json({ msg: "Recipe created successfully" })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("server error");

    }
});


//GET/recipes  -> getting all recipes

router.get('/recipes',async(req,res)=>{
    try {
        const recipes=await Recipe.find();
        res.json(recipes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("server error");
    }
})
//GET/recipe/:id

router.get("/:id", async (req, res) => {
    try {
        const recipe=await Recipe.findById(req.params.id);
        if(!recipe){
            res.status(400).json({msg:"recipe not found"})
        }
       res.json(recipe);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("server error");
    }
});

//PUT/recipe/update/:id

router.put("/update/:id", async (req, res) => {
    const { name,description,ingredients,instructions,imageURL,notes} = req.body;

    try {
        const recipe=await Recipe.findById(req.params.id);
        if(!recipe){
            res.status(400).json({msg:"Recipe not found"})
        }
        //update the fields
        if(name)recipe.name=name;
        if(description)recipe.description=description;
        if(ingredients)recipe.ingredients=ingredients;
        if(instructions)recipe.instructions=instructions;
        if(imageURL)recipe.imageURL=imageURL;
        if(notes)recipe.notes=notes;
        await recipe.save();
       res.json({msg:"Recipe updated successfully"});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("server error");
    }
});

//DELETE/recipe/:id

router.delete("/:id", async (req, res) => {
    try {
        const recipe=await Recipe.findById(req.params.id);
        if(!recipe){
            res.status(400).json({msg:"Recipe not found"})
        }
        await recipe.deleteOne();
       res.json({msg:"Recipe deleted successfully"});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("server error");
    }
});

module.exports = router;

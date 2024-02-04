const mongoose=require("mongoose");


const recipeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    }, 
    description:{
        type:String,
    },
    ingredients:{
        type:Array,
        required:true
    },
    instructions:{
        type:Object,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    imageURL:{
        type:String,
    },
    notes:{
        type:String
    }

    
});

module.exports=mongoose.model("Recipe",recipeSchema);

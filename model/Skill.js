const mongoose = require("mongoose"); 

const skillSchema = mongoose.Schema({
    skill: String, 
    description: String, 
    }, 
    {
        timestamps: true
});



const Skill = mongoose.model("Skill", skillSchema); 

module.exports = Skill;
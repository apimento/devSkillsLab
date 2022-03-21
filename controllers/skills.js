// APIs for SKILL Module  

//inlcude model first 
const Skill = require('../model/Skill');

//after npm i moment
const moment =require('moment');

//HTTP GET  - load create skill form 
exports.skill_create_get = (req, res) => { 
    res.render("skill/createSkill")
}

//HTTP POST - Skill 
exports.skill_create_post = (req, res) => { 
    console.log(req.body); 

    let skill = new Skill(req.body)

    //Save skill 
    skill
    .save() 
    .then(()=>{
        res.redirect('/skill/index');
    })
    .catch((err)=> { 
        console.log(err); 
        res.send("ERROR!")
    })
}; 

//HTTP GET - Skill index route 
exports.skill_index_get = (req, res) => { 
    Skill.find() 
    .then(skill => {   //variable in then must match below
        res.render("skill/index", {skill: skill, moment})
    }) 
    .catch(err => { 
        console.log(err);
    })
} 

//HTTP GET - Skill by Id 
exports.skill_show_get = (req,res) => { 
    console.log(req.query.id);
    Skill.findById(req.query.id)
    .then(skill =>{ 
        res.render("skill/detailSkill",{skill, moment})
    })
    .catch(err=> { 
        console.log(err);
    });
};

//HTTP DELETE - Skill
exports.skill_delete_get = (req,res) => { 
    console.log(req.query.id); 
    Skill.findByIdAndDelete(req.query.id)
    .then(() => {
       res.redirect("/skill/index")  
    })
    .catch(err=> { 
        console.log(err)
    })
} 

//HTTP GET - Load article edit form 
exports.skill_edit_get = (req,res) => { 
    Skill.findById(req.query.id)
    .then((skill)=>{
        res.render("skill/editSkill", {skill})
    }) 
    .catch(err =>{ 
        console.log(err);
    })
} 

//HTTP PUT - Article Update 
exports.skill_update_put =(req, res) => { 
    Skill.findByIdAndUpdate(req.body.id, req.body)
    .then(()=> { 
        res.redirect("/skill/index");
    }) 
    .catch(err => { 
        console.log(err);
    })
}
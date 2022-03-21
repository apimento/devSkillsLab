
const express = require("express"); 
const { append } = require("express/lib/response");

//after npm i method-override
var methodOverride = require("method-override")

const router = express.Router();  

//must be below initialization of router
router.use(methodOverride('_method'))

router.use(express.urlencoded({extended: true}));

//import article controller
const skillCntrl = require("../controllers/skills");

//routes 
router.get("/skill/createSkill",skillCntrl.skill_create_get);
router.post("/skill/createSkill",skillCntrl.skill_create_post); 
router.get("/skill/index", skillCntrl.skill_index_get);
router.get("/skill/detailSkill", skillCntrl.skill_show_get);
router.delete("/skill/delete", skillCntrl.skill_delete_get); 
router.get("/skill/editSkill", skillCntrl.skill_edit_get); 
router.put("/skill/update", skillCntrl.skill_update_put);

module.exports = router;
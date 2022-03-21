//after npm i express
const express = require("express");
//after npm i mongoose
const mongoose = require ("mongoose");  

//after npm i express-ejs-layouts
// const expressLayouts = require("express-ejs-layouts"); 

const PORT = 4005; 

const app = express();   

// app.use(expressLayouts);

//import route
const indexRoute = require('./routes/index');  
const skillsRoute = require('./routes/skills'); 

//mount route
app.use('/', indexRoute);  
app.use('/', skillsRoute);

//nodejs to look in views folder for all ejs files  
//will always look for folder called "views" (convention)
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/devSkills", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
},
()=> { 
    console.log("mongodb connected successfully!");
});

app.listen(PORT, ()=> console.log(`App is running on ${PORT}`)); 

// app.get("/a",(req,res) => { 
//     res.render("home/another");
// });
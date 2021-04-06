const Category = require("../models/Category");
require('../config/index')

const beer = {
        name: "beer",

    };

const whisky = {
        name: "whisky",

    };

const wine = {
        name: "wine",

    };
    

Category.insertMany([
   beer,
   whisky,
   wine
    
    ])
    .then(()=>{
        console.log("Funciona")
        process.exit()
    })
    .catch((err)=>{
        console.log(err)
    })
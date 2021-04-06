    const User = require("../models/User");
    require('../config/index')

    const NicoLimo = {
        firstname: "Nicolas",
        lasname:"Limonof" ,
        age:27,
        role: "Admin",
        email: "limo@gmail.com",
        password: 12345,
        // salt: ,
        // address:,
        // favorites:
        };

    User.insertMany([
        NicoLimo,
        
        ])
        .then(()=>{
            console.log("Funciona")
            process.exit()
        })
        .catch((err)=>{
            console.log(err)
        })
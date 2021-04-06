const mongoose = require('mongoose');



const tagSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
        min: 4,
        max: 120
    },

});




module.exports= mongoose.model('tag', tagSchema)
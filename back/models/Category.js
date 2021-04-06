const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
        min: 2,
        max: 120
    },
    products:[{
        type: Schema.Types.ObjectId, ref: 'product',
        }],
    
});


     

module.exports= mongoose.model('category', categorySchema)
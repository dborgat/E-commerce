const mongoose = require("mongoose");
const uri = "mongodb+srv://limo:abc123456@cluster0.vlkwe.mongodb.net/shop?retryWrites=true&w=majority"
// Mongoose connection
mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB connected"))
    .catch((e) => console.log("DB not connected:", e));
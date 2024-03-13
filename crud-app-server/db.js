// const mongoose= require("mongoose")
// mongoose.connect("mongodb://localhost:27017/crud-app")
// mongoose.connection.on('connected',()=>{
//     console.log("connected")
// })
// mongoose.connection.on('error',(err)=>{
//     console.error("error".err)
// })
// module.exports = mongoose;


const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/crud-app");

mongoose.connection.on('connected', () => {
    console.log("Connected to MongoDB");
});

mongoose.connection.on('error', (err) => {
    console.error("Error connecting to MongoDB:", err);
});

module.exports = mongoose;

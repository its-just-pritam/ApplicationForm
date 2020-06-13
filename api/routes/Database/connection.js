const mongoose = require('mongoose');

const URI = "mongodb+srv://towlschii:towlschii@cluster0-otrtq.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async()=>{
    console.log("Connecting to Database...");
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log("Database successfully connected !");
}

module.exports = connectDB;
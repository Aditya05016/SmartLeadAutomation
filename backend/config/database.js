const mongoose = require("mongoose");

const connectDb = async() => {
    try{

        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected sucessfully")
    }catch(error){
        console.log("Databse connection falied", error);
    }
}

module.exports = connectDb;
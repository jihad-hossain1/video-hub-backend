const mongoose = require("mongoose");
const DB_NAME = require("../constants.js");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(
      `\n Mongodb connected successfull ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Mongodb connection error: ", error);
    process.exit(1);
  }
};

module.exports = connectDB;

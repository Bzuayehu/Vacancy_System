const mongoose = require("mongoose");
require("colors");
const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGODB_URL_LOCAL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MongoDb connected succeessfully :${con.connection.host}`.bgCyan
    );
  } catch (error) {
    console.log(`MongoDB error+${error}`.bgRed);
    process.exit(1);
  }
};
module.exports = connectDB;

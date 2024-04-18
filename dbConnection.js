const mongoose = require("mongoose");
const makeConnection = async () => {
  try {
    const CONNECTION_STRING = process.env.CONNECTION_STRING;
    const dbConn = await mongoose.connect(CONNECTION_STRING);

    if (dbConn) {
      console.log("Database Connected Succesfully!");
    }
    return dbConn;
  } catch (err) {
    console.log("Error While Connecting to Database");
  }
};
module.exports = {
  makeConnection
};

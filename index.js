const express = require("express");
const { config } = require("dotenv"); //module for accessing .env file
const { makeConnection } = require("./dbConnection");
const { UserModel } = require("./models/userModel.js");
const {
  getAllUserHandler,
  getUserByIdHandler,
  addUserHandler,
  deleteUserById,
  updateUserById,
} = require("./controllers/userController.js");
const { userRoute } = require("./routes/userRoute.js");
const app = express();
config(); // to include environment variables
const PORT_NUMBER = process.env.PORT_NUMBER || 7000;
app.listen(3300, () => {
  console.log(`Server is Listening on Port Number ${PORT_NUMBER}`);
});
makeConnection();

app.use(express.json());
app.use("/user", userRoute);
console.log("This will get executed due to sync code");

userRoute.get("/", getAllUserHandler);
userRoute.post("/", addUserHandler);
userRoute.get("/:id", getUserByIdHandler);
userRoute.delete("/:id", deleteUserById);
userRoute.patch("/:id", updateUserById);

// const res = userModel.find({});
// console.log(res);

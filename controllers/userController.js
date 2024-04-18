const { UserModel } = require("../models/userModel");

const getAllUserHandler = async (request, response) => {
  const users = await UserModel.find({});
  response.send(JSON.stringify(users));
};

const getUserByIdHandler = async (request, response) => {
  const user = await UserModel.findOne({ id: request.params.id });
  response.send(user);
};

const addUserHandler=async(request,response)=>{
    const {name, address ,mobile ,id}= request.body
    console.log(name)
    const result = await UserModel.create({name,address,mobile,id})
    response.send(200)
}

const deleteUserById= async(request,response)=>{
    const {id}= request.params;
    const result= await UserModel.deleteOne({id:id})
    response.send('Deleted')
}

const updateUserById=async(request,response)=>{
    response.send('Updated')
}

module.exports = {
  getAllUserHandler,
  getUserByIdHandler,
  addUserHandler,
  deleteUserById,
  updateUserById
};

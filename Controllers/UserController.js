const user = require("../Models/User");

//method: @GET
const GetAllDataUsers = async (req, res) => {
  try {
    const users = await user.find({});
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

//method : @POST
const AddUser = async (req, res) => {
  try {
    //1
    const newUser = await user.create(req.body);
    res.json({ newUser, msg: "User Added Successfully" });
  } catch (error) {
    console.log(error);
  }
};

//method: PUT
const UpdateDataUser = async (req, res) => {
  try {
    const updatedUser = await user.findByIdAndUpdate(
      req.params.idUser,
      req.body,
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    console.log(error);
  }
};

//method: @Delete
const deletedDataUser = async (req, res) => {
  try {
    const deletedUser = await user.findByIdAndDelete(req.params.id);
    res.json({ msg: "User has been deleted successfully !!" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { UpdateDataUser, deletedDataUser, GetAllDataUsers, AddUser };

// Importing required modules
import mongoose from "mongoose";

// Defining the UserSchema
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Creating the UserModel
export const UserModel = mongoose.model("users", UserSchema);
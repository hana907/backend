import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// Define UserSchema
const UserSchema = new mongoose.Schema({
   _id: {
    type: String,
    required: true,
    minlength: 6
   },
   familyId: {
    type: String,
    required: true,
    unique: true,
   },
   username: {
     type: String,
     required: true,
     unique: true,
   },
   email: {
    type: String,
    required: true,
    unique: true,
   },
   password: {
    type: String,
    required: true,
    minlength: 6
   },
   fullName: {
    type: String,
    required: true,
    unique: true,
   },
   profileImage: {
    type: String,
    default: "",
   },
  }, 
  { timestamps: true }
);

// Hash password before saving user to DB
UserSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

// Compare password function
UserSchema.methods.comparePassword = async function (userPassword) {
  return await bcrypt.compare(userPassword, this.password);
}

// Create User model
const User = mongoose.model("User", UserSchema);

export default User;
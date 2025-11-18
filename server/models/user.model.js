import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    clerkUserId: {
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
      requried: true,
      unique: true,
    },
    img: String,
    savedPosts: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true },
);

/*const user = mongoose.model();*/

export default mongoose.model("User", userSchema);

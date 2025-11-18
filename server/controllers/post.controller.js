import Post from "../models/post.model.js";

export const findPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(200).json({
    data: posts,
  });
};

export const findPost = async (req, res) => {
  const { slug } = req.params;
  const post = await Post.findOne({ slug });
  return res.status(200).json({ success: true, message: post });
};

export const createPost = async (req, res) => {
  /*    const {title, slug, user, content, desc } = req.body;
    const newUser =  new Post({title, slug, user, content, desc});*/

  const newPost = new Post(req.body);
  const post = await newPost.save();
  return res
    .status(200)
    .json({ success: true, message: "Post have been created" });
};

export const deletePost = async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  return res.status(200).json({ success: true, message: "Post deleted" });
};

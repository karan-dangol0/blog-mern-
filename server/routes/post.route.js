import express from "express";
import {
  findPosts,
  findPost,
  createPost,
  deletePost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.get("/", findPosts);
router.get("/:slug", findPost);
router.post("/", createPost);
router.delete("/:id", deletePost);

export default router;

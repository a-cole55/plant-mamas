const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id });
      res.render("profile.ejs", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id }).sort({ nickname: "asc" }).lean();
      res.render("feed.ejs", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.render("post.ejs", { post: post, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createPost: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path, {folder: "plant-mamas"});

      await Post.create({
        name: req.body.name,
        nickname: req.body.nickname,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        datePurchased: req.body.datePurchased,
        lightConditions: req.body.lightConditions,
        temperature: req.body.temperature,
        water: req.body.water,
        dateWatered: req.body.dateWatered,
        dateFertilized: req.body.dateFertilized,
        user: req.user.id,

      });
      console.log("Post has been added!");
      res.redirect("/success");
    } catch (err) {
      console.log(err);
    }
  },
  updateDateWatered: async (req, res) => {
    try {
      await Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          dateWatered: new Date(Date.now()).toDateString()},
      );
      console.log("Date Updated!");
      res.redirect("/feed");
    } catch (err) {
      console.log(err);
      res.redirect("/feed");
    }
  },
  deletePost: async (req, res) => {
    try {
      // Find post by id
      let post = await Post.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await Post.deleteOne({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/feed");
    } catch (err) {
      console.log(err);
      res.redirect("/feed");
    }
  },
};

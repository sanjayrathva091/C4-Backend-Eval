const PostModel = require("../models/post.model");


const createPost = async (req, res) => {
    try {
        req.body._authorId = req._authorId;
        const newPost = new PostModel(req.body);
        newPost.validateSync();
        const saved = await newPost.save();
        return res.status(201).json({ message: "Post successfully created!", document: saved });
    } catch (error) {
        switch (error) {
            case "":

                break;

            default:
                return res.status(400).json({ message: `Unknown error: ${error.message}` });
        }
    }
};

module.exports = createPost;
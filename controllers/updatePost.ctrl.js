const PostModel = require("../models/post.model");

const updatePost = async (req, res) => {
    try {
        const updated = await PostModel.findOneAndUpdate({ _id: req.params._id, _authorId: req._authorId }, req.body, { returnDocument: "after" });
        return res.status(200).json({ message: "Updated successfully!", document: updated });
    } catch (error) {
        switch (error) {
            case "":

                break;

            default:
                return res.status(400).json({ messgae: `Unknown error! ${error.message}` });
        }
    }
};

module.exports = updatePost;
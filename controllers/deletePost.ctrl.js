const PostModel = require("../models/post.model");

const deletePost = async (req, res) => {
    try {
        const deleted = await PostModel.findOneAndDelete({ _id: req.params._id, _authorId: req._authorId });
        if (!deleted) return res.status(404).json({ message: "Request failed! Document not found.", document: deleted });
        return res.status(200).json({ message: "Deleted successfully!", document: deleted });
    } catch (error) {
        switch (error) {
            case "":

                break;

            default:
                return res.status(400).json({ messgae: `Unknown error! ${error.message}` });
        }
    }
};

module.exports = deletePost;
const PostModel = require("../models/post.model");


const fetchPosts = async (req, res) => {
    try {
        const { _authorId } = req;
        const searchQuery = { _authorId, ...req.query };
        const posts = await PostModel.find(searchQuery);
        return res.status(200).json({ message: "Data fetched successfully!", data: posts});
    } catch (error) {
        switch (error) {
            case "":
                
                break;
        
            default:
                return res.status(400).json({ message: `Unknown error! ${error.message}` });
        }
    }
};

module.exports = fetchPosts;
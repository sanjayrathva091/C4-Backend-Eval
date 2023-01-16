const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: { type: String },
    body: { type: String },
    device: { type: String },
    _authorId: { type: mongoose.SchemaTypes.ObjectId },
});

const PostModel = mongoose.model("post", PostSchema);

module.exports = PostModel;
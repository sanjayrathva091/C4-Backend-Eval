require("dotenv").config();
const JwT = require("jsonwebtoken");

exports.authorization = (req, res, next) => {
    const TokenBearer = req.headers.authorization;
    if (!TokenBearer) return res.status(403).json({ message: "Unauthorized request!" });
    const accessToken = TokenBearer.split(" ")[1];
    const PrivateKey = process.env.PRIVATE_KEY;
    try {
        const { _id } = JwT.verify(accessToken, PrivateKey);
        req._authorId = _id;
        return next();
    } catch (error) {
        switch (error) {
            case "":

                break;

            default:
                return res.status(400).json({ message: `Unknown error! ${error.message}` });
        }
    }
};
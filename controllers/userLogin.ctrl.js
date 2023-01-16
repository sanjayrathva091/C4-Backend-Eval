require("dotenv").config();
const JwT = require("jsonwebtoken");

const userLogin = async (req, res) => {
    try {
        const { _id, email } = req.oldUser;
        const PrivateKey = process.env.PRIVATE_KEY;
        const accessToken = JwT.sign({ _id, email }, PrivateKey, { expiresIn: "1h" });
        return res.status(200).json({ message: "Login successful!", accessToken });
    } catch (error) {
        switch (error) {
            case "":

                break;

            default:
                return res.status(400).json({ message: `Unknown error! ${error.message}` });
        }
    }
};

module.exports = userLogin;
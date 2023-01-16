const bcrypt = require("bcrypt");
const UserModel = require("../models/user.model");

exports.authentication = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const oldUser = await UserModel.findOne({ email });
        const checkPassword = bcrypt.compareSync(password, oldUser.password);
        if (!checkPassword) return res.status(401).json({ message: "Incorrect password! Please try again." });
        req.oldUser = oldUser;
        return next();
    } catch (error) {
        switch (error) {
            case "value":

                break;

            default:
                return res.status(400).json({ message: `Unknown error! ${error.message}` });
        }
    }
};
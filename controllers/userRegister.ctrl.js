const bcrypt = require("bcrypt");
const UserModel = require("../models/user.model");

const userRegister = async (req, res) => {
    try {
        const SaltRounds = Math.floor((Math.random() * 3) + 8);
        req.body.password = bcrypt.hashSync(req.body.password, SaltRounds);
        const newUser = new UserModel(req.body);
        newUser.validateSync();
        const saved = await newUser.save();
        return res.status(201).json({ message: "User successfully registered!", document: saved });
    } catch (error) {
        switch (error) {
            case error.code === 11000:
                return res.status(409).json({ message: "User already exists!" });
            default:
                return res.status(400).json({ message: `Uknown error! ${error.message}` });
        }
    }
};

module.exports = userRegister;
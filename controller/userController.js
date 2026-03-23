const Users = require("../models/users");

const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await Users.create({ name, email, password });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await Users.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createUser,
    getAllUsers,
}


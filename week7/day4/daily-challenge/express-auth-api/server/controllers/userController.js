const bcrypt = require('bcrypt');
const User = require('../models/user');

const userController = {
    register: async (req, res) => {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, password: hashedPassword });
        res.json(user);
    },
    login: async (req, res) => {
        const { username, password } = req.body;
        const user = await User.getByUsername(username);
        if (user && await bcrypt.compare(password, user.password)) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    },
    getAllUsers: async (req, res) => {
        const users = await User.getAll();
        res.json(users);
    },
    getUserById: async (req, res) => {
        const user = await User.getById(req.params.id);
        res.json(user);
    },
    updateUser: async (req, res) => {
        const user = await User.update(req.params.id, req.body);
        res.json(user);
    },
};

module.exports = userController;
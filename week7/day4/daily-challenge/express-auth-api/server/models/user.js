const db = require('../config/db');

const User = {
    getAll: () => db('users').select('*'),
    getById: (id) => db('users').where({ id }).first(),
    create: (user) => db('users').insert(user).returning('*'),
    update: (id, user) => db('users').where({ id }).update(user).returning('*'),
};

module.exports = User;
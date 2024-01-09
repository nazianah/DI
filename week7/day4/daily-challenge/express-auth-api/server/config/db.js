const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'nazianah0202',
        database: 'express',
        port: 5432,
    },
});

module.exports = db;
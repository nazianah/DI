const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'blog_db',
    password: 'nazianah0202',
    port: 5432,
});

module.exports = pool;
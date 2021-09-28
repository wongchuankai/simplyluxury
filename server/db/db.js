const Pool = require('pg').Pool
require('dotenv').config()

const test_config = {
    user: process.env.TEST_USER,
    host: process.env.TEST_HOST,
    database: process.env.TEST_DATABASE,
    password: process.env.TEST_PASSWORD,
    port: process.env.TEST_PORT,
}

const proConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    }               // for heroku
}

const pool = new Pool(
    process.env.NODE_ENV === "production" ? proConfig : test_config
)

module.exports = pool
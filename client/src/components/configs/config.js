require('dotenv').config()

const configs = {
    development: {
      SERVER_URI: 'http://localhost:8000/api',
    },
    production: {
      SERVER_URI: process.env.SERVER_URI,
    },
};
  
module.exports = configs[process.env.NODE_ENV === "production" ? "production" : "development"];
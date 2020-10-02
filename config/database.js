const dotenv = require("dotenv");

if(process.env.NODE_ENV !== 'production'){
  dotenv.config({
    path: `.env.example`,
  })
}


module.exports = ({ env }) => ({
  "defaultConnection": "default",
  "connections": {
    "default": {
      "connector": "mongoose",
      "settings": {
        "uri": process.env.DATABASE_URL
      },
      "options": {
        "ssl": true
      }
    }
  }
});

/*
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
*/
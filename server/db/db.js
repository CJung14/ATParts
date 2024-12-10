require('dotenv').config()
const Sequelize = require("sequelize");
const pkg = require("../../package.json");
const username = process.env.USERNAME
const password = process.env.PASSWORD
const host = process.env.HOST

const db = new Sequelize(pkg.name, username, password, 
  {
  host: host,
  dialect: 'postgres'
  }, 
  {
    logging: false,
  }
);

module.exports = db;

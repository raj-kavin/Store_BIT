const mysql = require("mysql");
const dotenv = require("dotenv").config();

// Create a connection pool
const pool = mysql.createPool({
  host: "121.200.55.42",
  user: "lab",
  password: "Spl@765",
  database: "LAB",
  port: "3306"
}); 

module.exports = {
  query: (sql, values) => {
    return new Promise((resolve, reject) => {
      pool.query(sql, values, (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  },
  close: () => {
    pool.end();
  },
  getConnection: () => {
    return new Promise((resolve, reject) => {
      pool.getConnection((error, connection) => {
        if (error) {
          return reject(error);
        }
        resolve(connection);
      });
    });
  },
};

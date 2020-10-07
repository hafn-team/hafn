const mysql = require("mysql");
const mysqlConfig = require("./config.js");

const connection = mysql.createConnection(mysqlConfig);

// const getUser = function () {
//   return new Promise((resolve, reject) => {
//     connection.query("SELECT * FROM users", (err, data) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(data);
//     });
//   });
// };
// get all organizations of user
const getOrganization = function (userID) {
  return new Promise((resolve, reject) => {
    connection.query(
      `select * from organizations where userID=${userID}`,
      (e, result) => {
        if (e) {
          console.log(e);
          return reject();
        }
        resolve(result);
      }
    );
  });
};

//get all projet of organizations
const getOrgProjects = function (orgId) {
  return new Promise((resolve, reject) => {
    connection.query(
      `select * from projects where organizationID=${orgId}`,
      (e, result) => {
        if (e) {
          console.log(e);
          return reject();
        }
        resolve(result);
      }
    );
  });
};
/***** crud operations for organisations table *****/
const createOrganization = function (userID, name, description) {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO organizations set ?`,
      { name, description, userID },
      (e, result) => {
        if (e) {
          console.log(e);
          return reject();
        }
        resolve(result);
      }
    );
  });
};

module.exports = {
  // getUser,
  getOrganization,
  getOrgProjects,
  createOrganization,
};

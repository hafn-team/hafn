const mysql = require("mysql");
const mysqlConfig = require("./config.js");

const connection = mysql.createConnection(mysqlConfig);

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});
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

/*****create new organization *****/
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

//Create new project
const createProject = function (userID, organizationID, name, description) {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO projects set ?`,
      { name, description, organizationID, userID },
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

const getAllData = (callback) => {
  connection.query("select * from users", (err, data) => {
    if (err) throw callback(err);
    console.log({ data });
    callback(null, data);
  });
};

const postData = (user, callback) => {
  let sql = `insert into users(fullname, username, secretinfo, password) values (?,?,?,?) `;
  connection.query(sql, user, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};

const login = (callback) => {
  connection.query("select username, password from users", (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};


const forgetPass = (callback) => {
  connection.query("select username, secretinfo from users", (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};

const updatePass = (arr, callback) => {
  let sql = `UPDATE users SET password = ?  WHERE secretinfo = ?;`;
  connection.query(sql, arr, (err, data) => {
    if (err) throw err;
    callback(null, data);
  });
};

const deleteUser = (username, callback) => {
  let sql = `DELETE FROM users WHERE username = '${username}'`;
  connection.query(sql, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};
module.exports = {
  createProject,
  getAllData,
  postData,
  login,
  forgetPass,
  deleteUser,
  updatePass,
  getOrganization,
  getOrgProjects,
  createOrganization,
};

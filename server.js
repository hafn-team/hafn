const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3008;
const db = require("./db/database.js");

// const auth = require("express").Router();
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/user", async (req, res) => {
//   try {
//     const userData = await db.getUser();
//     res.status(200).send(userData);
//   } catch (err) {
//     console.error(err);
//   }
// });

/**
 * Get all organizations by user
 */
app.get("/organization/:userID", async (req, res) => {
  try {
    const data = await db.getOrganization(req.params.userID);
    res.send(data);
  } catch (e) {
    console.log(e);
  }
});

//get all the project of an organization
app.get("/getOrgProject/:orgID", async (req, res) => {
  try {
    const data = await db.getOrgProjects(req.params.orgID);
    res.send(data);
  } catch (e) {
    console.log(e);
  }
});

/**
 * Creates a new organization
 *
 */
app.post("/organization/:userID", async (req, res) => {
  try {
    await db.createOrganization(
      req.body.userID,
      req.body.name,
      req.body.description
    );
  } catch (e) {
    console.log(e);
  }
});

/**
 * Creates a new project
 *
 */
app.post("/getOrgProject/:orgID", async (req, res) => {
  try {
    await db.createProject(
      req.body.userID,
      req.body.organizationID,
      req.body.name,
      req.body.description
    );
  } catch (e) {
    console.log(e);
  }
});

const hash = (pass) => bcrypt.hashSync(pass, salt);

app.post("/addUsers", (req, res) => {
  let data = req.body;
  console.log(data);
  let users = [
    data.fullname,
    data.username,
    hash(data.secretinfo),
    hash(data.password),
  ];
  db.postData(users, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.get("/getUser", (req, res) => {
  db.getAllData((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/login", (req, res) => {
  console.log("aaa", req.body);
  db.login((err, data) => {
    let person = data;
    if (err) throw err;
    let arr = person.map(
      (element) =>
        req.body.username === element.username &&
        bcrypt.compareSync(req.body.password, element.password)
    );
    res.send(arr.includes(true));
  });
});

app.post("/forgetPassword", (req, res) => {
  console.log("body", req.body);
  db.forgetPass((err, data) => {
    let person = data;
    if (err) throw err;
    let arr = person.map(
      (element) =>
        req.body.username === element.username &&
        bcrypt.compareSync(req.body.secretinfo, element.secretinfo)
    );
    console.log(arr);
    if (arr.includes(true)) {
      db.updatePass(
        [hash(req.body.newPassword), hash(req.body.secretinfo)],
        (err, data) => {
          console.log("haloum");
          if (err) throw err;
          res.send(data);
        }
      );
    } else {
      res.send("something wrong");
    }
  });
});

app.post("/deleteuser", (req, res) => {
  db.deleteUser(req.body.username, (err, data) => {
    if (err) throw err;
    res.send(`${req.body.username} removed`);
  });
});

app.listen(port, () => console.log(`server is listening on port ${port}`));

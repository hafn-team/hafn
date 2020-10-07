const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3008;
const db = require("./db/database.js");

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

app.listen(port, () => console.log(`server is listening on port ${port}`));

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

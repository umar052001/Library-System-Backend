const express = require("express");
const cors = require("cors");
const knex = require("knex");
//controllers
const { handleStudentSignUp } = require("./controllers/studentSignUp");
const { handleStudentSignIn } = require("./controllers/studentSignIn");
const { handleLibrarianSignIn } = require("./controllers/librarianSignIn");
const { handleBooksInsertion } = require("./controllers/librarian/addbooks");
const {
  handleCopiesDecrease,
} = require("./controllers/librarian/decreaseCopies");
const {
  handleCopiesIncrease,
} = require("./controllers/librarian/increaseCopies");
const { handleBooksDelete } = require("./controllers/librarian/deleteBooks");
const { handleBooksDisplay } = require("./controllers/getBooks");
const { handleIssueDate } = require("./controllers/librarian/issue/issueBook");
const { handleStudentData } = require("./controllers/studentData");
const { handleIssueData } = require("./controllers/librarian/issue/getIssueData");


//connection to postgres
const db = knex({
  // connect to database:
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "1234",
    database: "Project2",
  },
});

const app = express();
//middlewares
app.use(cors());
app.use(express.json());

//routes student
app.post("/signupstudent", (req, res) => {
  handleStudentSignUp(req, res, db);
});
app.post("/signinstudent", handleStudentSignIn(db));
app.get("/getbooks", (req, res) => {
  handleBooksDisplay(req, res, db);
});
app.get("/getstudent/:email", (req, res) => {
  handleStudentData(req, res, db);
});


//routes librarian

app.get("/issuedata", (req, res) => {
  handleIssueData(req, res, db);
});
app.post("/signinlibrarian", handleLibrarianSignIn(db));
app.post("/addbooks", (req, res) => {
  handleBooksInsertion(req, res, db);
});
app.delete("/deletebooks/:isbn", (req, res) => {
  handleBooksDelete(req, res, db);
});
app.put("/decreasebooks/:isbn", (req, res) => {
  handleCopiesDecrease(req, res, db);
});
app.put("/increasebooks/:isbn", (req, res) => {
  handleCopiesIncrease(req, res, db);
});
app.post("/issuebooks", (req, res) => {
  handleIssueDate(req, res, db);
});

//app running
app.listen(3004, () => {
  console.log("app is running on port 3004");
});

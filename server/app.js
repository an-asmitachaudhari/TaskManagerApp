const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/demo";
const app = express();
const cors = require("cors");
const multer = require("multer");

mongoose.connect(url, { useNewUrlParser: true });

const con = mongoose.connection;
// app.use(cors(corsOptions));
app.options("*", cors());

/*app.post("/multifiles", upload.array("file"), (req, res) => {
  const files = req.files;

  if (Array.isArray(files) && files.length > 0) {
    res.json(files);
  } else {
    throw new Error("File upload unsuccessfully");
  }
});
con.on("open", function () {
  console.log("connected...");
});
*/

app.use(express.json());

app.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,  Accept, x-client-key, x-client-token, x-client-secret, Authorization"
  );
  next();
});

const userRouter = require("./routers/user.routes");

//const multerRouter = require("./routers/fileupload.routes");

app.use("/user", userRouter);
//app.use("/fileuploading", multerRouter);

app.all("*", (req, res) => {
  const err = new Error("Requested URL not found");
  res.status(400).json({
    status: 400,
    message: err.message,
  });
});

const upload = multer({ dest: "uploads" });

app.post("/file", upload.single("file"), (req, res) => {
  const file = req.file;

  if (file) {
    res.json(file);
  } else {
    throw new Error("File upload unsuccessfully");
  }
});

/*app.post("/multifiles", upload.array("file"), (req, res) => {
  const files = req.files;

  if (Array.isArray(files) && files.length > 0) {
    res.json(files);
  } else {
    throw new Error("File upload unsuccessfully");
  }
});
*/

/*userRouter.route("/email/:email").get(function (req, res) {
  let email = req.params.email;
  Student.find({ s_email: email }, function (err, student) {
    res.json(student);
  });
});*/

app.listen(8000, function () {
  console.log("server started...");
});

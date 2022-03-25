/*const express = require("express");
const router = express.Router();
//const userController = require("../controllers/user.controller");

const multer = require("multer");
const upload = multer({ dest: "uploads" });
router.post("/file", upload.single("profileimage"), (req, res) => {
  const file = req.file;

  if (file) {
    res.json(file);
  } else {
    throw new Error("File upload unsuccessfully");
  }
});*/

/*const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "uploads");
  },
  filename: (req, file, callBack) => {
    callBack(null, `app_${file.originalname}`);
  },
});

const uploads = multer({ storage: storage });

router.post("/", uploads.single("profileimage"), (req, res, next) => {
  const file = req.file;
  console.log("test file", file.filename);
  if (!file) {
    const error = new Error("No File");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
});

module.exports = router;*/

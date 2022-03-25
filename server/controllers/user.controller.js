const crypto = require("crypto");
const User = require("../models/user.model");
const Task = require("../models/task.model");
const Notes = require("../models/notes.model");
const Jwellery = require("../models/jwellery.model");
const Category = require("../models/category.model");

const utils = require("../utils/utils");
const jwt = require("jsonwebtoken");
const { async } = require("rxjs");

class UserController {
  constructor() {}

  async login(req, resp) {
    const userData = await User.findOne({
      email: req.body.email,
    });

    const dbPasswordString = userData.password.split("?");
    const dbHashedPassword = dbPasswordString[0];
    const salt = dbPasswordString[1];
    console.log("requestedPassword=====", dbHashedPassword, salt);
    const hashedPassword = utils
      .hashPassword(req.body.password, salt)
      .split("?");

    if (hashedPassword[0] === dbHashedPassword) {
      if (userData) {
        let jwtToken = jwt.sign(
          {
            email: userData.email,
          },
          "set-test"
        );

        const successData = {
          code: 200,
          message: "Record Fetched Successfully",
          data: userData,
          token: jwtToken,
        };
        res.send(successData);
      } else {
        const successData = {
          code: 200,
          message: "No data found",
          data: [],
        };
        res.send(successData);
      }
      // utils.sendResponse(200, userData, "User login succesful", res);
    } else {
      utils.sendResponse(401, [], "Invalid Credentials", resp);
    }
  }

  async register(req, resp) {
    const hashedPassword = utils.hashPassword(req.body.password);
    try {
      const user = await new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        password: hashedPassword,
        confirmpassword: hashedPassword,
      }).save();
      utils.sendResponse(200, user, "User registration successful", resp);
    } catch (error) {
      utils.sendResponse(400, error.errors, "Invalid Data", resp);
    }
  }

  async getUsers(req, resp) {
    try {
      console.log("req=====", req.body);
      const userData = await User.find({
        email: req.body.email,
      });
      console.log("userData=====", userData);
      if (userData.length > 0) {
        utils.sendResponse(201, [], "email already exist", resp);
      } else {
        utils.sendResponse(200, [], "You can use this email", resp);
      }
    } catch (error) {}
  }

  async addTask(req, resp) {
    try {
      const task = await new Task({
        taskName: req.body.taskName,
        date: req.body.date,
        reminder: req.body.reminder,
        urgent: req.body.urgent,
        note: req.body.note,
      }).save();
      utils.sendResponse(200, task, "task addition successful", resp);
    } catch (error) {
      utils.sendResponse(400, error.errors, "Invalid Data", resp);
    }
  }

  async addNote(req, resp) {
    try {
      const note = await new Notes({
        title: req.body.title,
        note: req.body.note,
        reminder: req.body.reminder,
        urgent: req.body.urgent,
      }).save();
      utils.sendResponse(200, note, "notes addition successful", resp);
    } catch (error) {
      utils.sendResponse(400, error.errors, "Invalid Data", resp);
    }
  }

  async getTask(req, resp) {
    try {
      console.log("req=====", req.body);
      const taskData = await Task.find({
        taskName: req.body.taskName,
        date: req.body.date,
        status: req.body.status,
      });
      console.log("taskData=====", taskData);
      if (taskData.length > 0) {
        utils.sendResponse(201, [], "no record", resp);
      } else {
        utils.sendResponse(200, [], "record find", resp);
      }
    } catch (error) {}
  }

  async getNote(req, resp) {
    try {
      console.log("req=====", req.body);
      const noteData = await Notes.find({
        title: req.body.title,
        note: req.body.note,
        createdAt: req.body.createdAt,
      });
      console.log("taskData=====", noteData);
      if (noteData.length > 0) {
        utils.sendResponse(201, [], "no record", resp);
      } else {
        utils.sendResponse(200, [], "record find", resp);
      }
    } catch (error) {}
  }

  /*async addJewellery(req, resp) {
    try {
      const jwellery = await new Jwellery({
        name: req.body.name,
        price: req.body.price,
        material: req.body.material,
        enduser: req.body.enduser,
        discount: req.body.discount,
        metal: req.body.metal,
        title: req.body.title,
        description: req.body.description,
      }).save();
      utils.sendResponse(200, jwellery, "jwellery addition successful", resp);
    } catch (error) {
      utils.sendResponse(400, error.errors, "Invalid Data", resp);
    }


  async getcategory(req, resp) {
    try {
      console.log("req=====", req.body);
      const addcat = await Category.find({
        name: req.body.name,
      });
      console.log("userData=====", addcat);
      if (addcat.length > 0) {
        utils.sendResponse(201, [], "no record", resp);
      } else {
        utils.sendResponse(200, [], "record find", resp);
      }
    } catch (error) {}
  }
}*/
}

module.exports = new UserController();

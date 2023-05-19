const StdModel = require("../models/studentModel");
const valResult = require("express-validator");

//create controllers
const createStdConntroller = async (req, res) => {
  // Validation checks
  const error = valResult(req);
  if (!error.isEmpty()) {
    console.log(error);
    return res.json({ message: "failed to create student" });
  }
  const { name, stdId, email } = req.body;

  const students = new StdModel({ name, stdId, email });

  await students
    .save()
    .then((result) => {
      res.json({ message: "successful", data: result });
    })
    .catch((err) => console.log(err));
};

const viewStdController = (req, res) => {
  const { id } = req.params;
  if (id) {
    StdModel.findById(id)
      .then((std) => {
        res.json({ message: "list of students", data: std });
      })
      .catch((err) => console.log(err));
  } else {
    StdModel.find()
      .then((std) => {
        res.json({ message: "list of students", data: std });
      })
      .catch((err) => console.log(err));
  }
};

const updateStdController = (req, res) => {
  let { id, name, stdId, email } = req.body;
  StdModel.findById(id)
    .then((std) => {
      if (std) {
        std.name = name;
        std.stdId = stdId;
        std.email = email;

        std.save();
        res.json({ message: "student data updated", data: std });
      }
      res.json({ message: "update unsuccessful" });
    })
    .catch((err) => console.log(err));
};

const deleteStdController = (req, res) => {
  const { id } = req.body;

  StdModel.findByIdAndRemove(id)
    .then((deleteStd) => {
      if (deleteStd) {
        res.json({ message: "student removed", data: deleteStd });
      }
      res.json({ message: "student not removed" });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  createStdConntroller,
  viewStdController,
  updateStdController,
  deleteStdController,
};

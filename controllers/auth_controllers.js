const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

//create user controller
exports.userController = async (req, res, next) => {
  const { name, email, password, phone } = req.body;

  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(password, salt);
  const user = new UserModel({ name, email, password: hash, phone });

  await user
    .save()
    .then((result) => {
      res
        .cookie("token", "node_auth_parsed", { expire: 36000 + Date.now() })
        .send({
          message: "successful",
          data: { name: result.name, email: result.email, phone: result.phone },
        });
    })
    .catch((err) => console.log(err));
  next();
};

//signin user controller
exports.signInController = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(error);
      return res.json({ message: errors.array()[0].msg });
    }

    const { email, password } = req.body;
    //find email
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.json({ message: "user not found" });
    }

    const isAuth = await bcrypt.compare(password, user.password);
    if (!isAuth) {
      return res.json({ message: "email or password incorrect" });
    }
    const token = jwt.sign(
      { name: user.name, email: user.email, password: user.password },
      "iamalegend",
      { expiresIn: "1h" }
    );
    return res.json({ message: "user signed in", token });
  } catch (error) {
    console.log(error);
    res.json({ message: "please try again" });
  }

  // const token = jwt.sign({name:user.name, email:user.email, password:user.password}, 'iamalegend', {expiresIn:"1h"})

  // res.json({ message: "user not found", token});

  next();
};

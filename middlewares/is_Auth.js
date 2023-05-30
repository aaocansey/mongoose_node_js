const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {

  const {verifyToken} = req.cookies;
  if(!verifyToken) {
    return res.send({message:'unsuccessful', error:'Please sign up to access route',})
  }

  try {
    const authorizationHeader = req.get("Authorization");
    if (!authorizationHeader) throw new Error("unauthenticated");

    const token = authorizationHeader.split(" ")[1];

    const decodedToken = jwt.verify(token, "iamalegend");

    if (!decodedToken) throw new Error("unauthorized");

    next();
  } catch (error) {
    console.log(error);
    res.json({message:error.message})
  }
};

module.exports = isAuth; 
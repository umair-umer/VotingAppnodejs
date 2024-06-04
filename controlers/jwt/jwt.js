const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtMiddelWare = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) return res.status(401).jason({ message: "unAuthorized" });

  const token = req.headers.authorization.split(" ")(1);
  if (!token) return res.status(401).jason({ message: "unAuthorized" });

  try {
    const decode = jwt.verify(token, process.env.jwt);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).jason({ message: "invalid Token" });
  }
};

const generatToken = (userdata) => {
  return jwt.sign(userdata,process.env.jwt);
};
module.exports = { jwtMiddelWare, generatToken };

var jwt = require("jsonwebtoken");
const JWT_SECRET = "Alokisagoodb$oy";

const fetchuser = (req, res, next) => {
  // Get the user from jws token and add id to req object
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please enter valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } 
  catch (error) {
    res.status(401).send({ error: "Please enter valid token" });
  }
};
module.exports = fetchuser;

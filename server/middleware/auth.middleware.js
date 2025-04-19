const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (token) {
    try {
      const decoded = jwt.verify(token, "jaiho");
      if (decoded) {
        req.body.userID = decoded.userID
        req.body.name = decoded.user
        next();
      } else {
        res.json({ msg: "User not Authorised!" });
      }

    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.json({ msg: "Please Login!" });
  }
};

module.exports = { auth };

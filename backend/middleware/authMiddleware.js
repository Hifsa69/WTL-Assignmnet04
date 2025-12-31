const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.json({ message: "No Token" });

  jwt.verify(token, "secret", (err, user) => {
    if (err) return res.json({ message: "Token Invalid" });

    req.user = user;
    next();
  });
};

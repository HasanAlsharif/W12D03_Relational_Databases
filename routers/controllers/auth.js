const db = require("../../db/models/db/db");
const usersModel = require("./../../db/models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const query = `SELECT * FROM users WHERE email = "${email}"`;
    db.query(query, async (err, result) => {
      if (err) throw err;
      console.log("RESULT: ", result);

      if (!result[0]) return res.status(400).json("The email doesn't exist");
      const valid = await bcrypt.compare(password, result[0].password);
      if (valid) {
        const payload = {
          userId: result[0].id,
          country: result[0].country,
          role: result[0].role_id,
        };

        const options = {
          expiresIn: "60m",
        };
        return res
          .status(200)
          .json(jwt.sign(payload, process.env.SECRET, options));
      }

      return res.status(403).json("The password you’ve entered is incorrect");
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  login,
};

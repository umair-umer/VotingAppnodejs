const express = require("express");
const router = express.Router();
const User = require("../../schemas/userschema");
const { jwtMiddelWare, generatToken } = require("../../controlers/jwt/jwt");
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const Newuser = new User(data);
    const response = await Newuser.save();
    console.log(response, "response");
    const payload = {
      id: response.id,
      email: response.email,
    };
    const token = generatToken(payload);

    res.status(200).json({ token, response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal erro server" });
  }
});

module.exports = router;

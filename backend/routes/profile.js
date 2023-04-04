const express = require("express")
require("../Database/db")
const {Profile}= require("../controllers/userProfileController")

const router = express.Router()

router.post("/profile", Profile)

module.exports = router
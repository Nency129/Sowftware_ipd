const User = require("../models/userProfileModel")

const Profile = async (req, res) => {
    const { name,DOB,Address,Phone,Aadhar} = req.body

    try {
        const user = await User.Profile(name,DOB,Address,Phone,Aadhar)

        res.status(200).json({name})

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports= {Profile}
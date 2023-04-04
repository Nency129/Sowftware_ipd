const mongoose = require("mongoose")
const validator = require("validator")

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        require: true

    },
    DOB: {
        type: String,
        unique: true,
        require: true
    },
    Address:{
        type: String,
        unique: true,
        require: true
    },
    Phone:{
        type: String,
        unique: true,
        require: true
    },
    Aadhar:{
        type:Number,
        require: true,
        unique: true,
        min:100000000000,
        max:1000000000000
    }
})


profileSchema.statics.Profile = async function (name,DOB,Address,Phone,Aadhar) {

    if (!name || !DOB ||!Address || !Phone || !Aadhar) {
        throw Error("All fields are required")
    }
    
    if (!validator.isMobilePhone(Phone)) {
        throw Error("Phone is not valid")
    }

    const user = await this.create({name,DOB,Address,Phone,Aadhar})

    return user
}


module.exports = mongoose.model("Profile", profileSchema);
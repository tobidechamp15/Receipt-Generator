import mongoose from "mongoose";




const profileSchema = mongoose.Schema({
    companyName:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    logo:{
        type: String,
        required: true
    },
    plan:{
        type: String,
        required: true,
        enum:["plan1", "plan2","plan3", "plan4","plan5"]
    }

},{
    timestamps: true
})

const Profile = mongoose.model("Profile", profileSchema)

export default Profile;
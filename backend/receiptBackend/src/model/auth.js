import mongoose from "mongoose";
import bcryptjs  from "bcryptjs";




const authSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLenght:8,
    },
 

},{
    timestamps: true
})

authSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcryptjs.compare(enteredPassword, this.password)

}

authSchema.pre('save', async function (next) {
    if(!this.isModified('password')) {
        next()
    }

    const salt = await bcryptjs.genSalt(10)
    this.password = await bcryptjs.hash(this.password, salt)
})

const Auth = mongoose.model("Auth", authSchema)


export default Auth;
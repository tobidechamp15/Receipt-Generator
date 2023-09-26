import express from "express";
import Auth from "../model/auth.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";





const signup = async (req, res) => {
    const { username, email, password} = req.body;

    const userExists = await Auth.findOne({ email })  

    if(userExists) {
        res.status(400)
        .json({ message: "User already exists"})
    }

    const user = await Auth.create({ 
        username,
        email,
        password,
    });

    if(user){
        res.status(201).json({ message: "User created successfully", user,
        _id: user._id,
        username: user.username,
        email: user.email,
        password: user.password
      })
    }
}

const signIn = async (req, res) => {
    const {email, password} = req.body;


    const isMatch = await Auth.findOne({ email})

    if(!isMatch) {

        return res.status(401).json({ error: "Incorrent passowrd"});

    }else {
       bcryptjs.compare(password, isMatch.password).then(function (isMatch) {
         if(isMatch) {
            const maxAge = 3 * 606 * 60;
            const token = jwt.sign(
                { id: isMatch._id, email },
                process.env.JWT_SECRET_KEY,
                { expiresIn: maxAge}
            );
            res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000})
            res.status(201).json({ message: "Login succesful", isMatch, token})
         }
       })
    }
}

export {signup, signIn}





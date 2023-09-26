import express from "express";
import { signup, signIn } from "../controller/authInfo.js";

const router = express.Router();
router.route("/signup").post(signup)
router.route("/signIn").post(signIn)

export default router;
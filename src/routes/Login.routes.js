
import { Router } from "express";
import passport from "passport";
import { LoginwithMail } from "../Controller/Login.Controller.js";



const router = Router()

router.route('/send-mail').get(LoginwithMail)

export default router
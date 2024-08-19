
import { body } from "express-validator";


export const userValidationSchema = [
    body("userName").isString().isLength({ min: 3, max: 50 }).notEmpty().withMessage("Username must be at least 3 characters long"),
    body("email").isEmail().notEmpty().withMessage("Email is required"),
    body("password").isString().isLength({ min: 8, max: 50 }).notEmpty().withMessage("Password must be at least 8 characters long"),
];


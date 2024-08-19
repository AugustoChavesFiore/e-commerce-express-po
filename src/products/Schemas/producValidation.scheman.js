import { body } from "express-validator";

export const productValidationSchema = [
    body('name').isString().notEmpty(),
    body('price').isNumeric().notEmpty(),
    body('description').isString().notEmpty(),
    body('category').isString().notEmpty(),
];
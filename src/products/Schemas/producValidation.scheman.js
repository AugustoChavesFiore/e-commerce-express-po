import { body } from "express-validator";

export const productValidationSchema = [
    body('name').isString().notEmpty().withMessage('Name is required'),
    body('price').isNumeric().notEmpty().withMessage('Price is required'),
    body('description').isString().notEmpty().withMessage('Description is required'),
    body('category').isString().notEmpty().withMessage('Category is required'),
    body('stock').isNumeric().notEmpty().withMessage('Stock is required'),
];
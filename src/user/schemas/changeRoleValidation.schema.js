import { body } from 'express-validator';
import { ValidRoles } from '../../common/constans/roles.cons.js';


export const changeRoleValidationSchema = [
    body("role").isString().isIn(Object.values(ValidRoles))
];

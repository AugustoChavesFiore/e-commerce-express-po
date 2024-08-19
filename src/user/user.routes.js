import { Router } from 'express';
import { UserController } from './user.controller.js';
import { UserServices } from './user.service.js';
import { userValidationSchema } from './schemas/userValidation.schema.js';
import { changeRoleValidationSchema } from './schemas/changeRoleValidation.schema.js';
import { validateFields } from '../common/middlewares/expressValidator.js';

export class UserRoutes {

    static get routes() {

        const router = Router();
        const userServices = new UserServices();
        const userController = new UserController(userServices);
        router.get('/', userController.getUsers);
        router.get('/:id', userController.getUser);
        router.post('/', [userValidationSchema,validateFields ], userController.createUser);
        router.put('/:id', userController.updateUser);
        router.patch('/:id',[changeRoleValidationSchema, validateFields] , userController.changeRole);
        router.delete('/:id', userController.deleteUser);
        
        return router;
    };


};
import { Router } from 'express';
import { UserController } from './user.controller.js';
import { UserServices } from './user.service.js';


export class UserRoutes {


    static get routes() {

        const router = Router();
        const userServices = new UserServices();
        const userController = new UserController(userServices);

        router.get('/', userController.getUsers);
        router.get('/:id', userController.getUser);
        router.post('/', userController.createUser);
        router.put('/:id', userController.updateUser);
        router.delete('/:id', userController.deleteUser);
        
        return router;
    };


};
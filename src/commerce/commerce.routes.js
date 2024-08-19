import { Router } from "express";
import { CommerceServices } from "./commerce.service.js";
import { CommerceController } from "./commercer.controller.js";



export class CommerceRoutes {

    static get routes() {

        const router = Router();
        const commerceService = new CommerceServices();
        const commerceController = new CommerceController(commerceService);

        router.get('/', commerceController.get);
        router.get('/:id', commerceController.getById);
        router.post('/', commerceController.create);
        router.put('/:id', commerceController.update);
        router.delete('/:id', commerceController.delete);
        
        return router;
    };
};

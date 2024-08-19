import { Router } from 'express';
import { ProductsController } from './products.controller.js';
import { ProductService } from './products.service.js';
import { productValidationSchema } from './Schemas/producValidation.scheman.js';
import { validateFields } from '../common/middlewares/expressValidator.js';

export class ProductsRoutes {

    static get routes() {

        const router = Router();
        const productService = new ProductService();
        const productsController = new ProductsController(productService);

        router.get('/', productsController.get);
        router.get('/:id', productsController.getById);
        router.post('/', [productValidationSchema, validateFields], productsController.create);
        router.put('/:id', productsController.update);
        router.delete('/:id', productsController.delete);
        
        return router;
    };


};
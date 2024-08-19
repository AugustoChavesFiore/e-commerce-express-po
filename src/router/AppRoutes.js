import { Router } from 'express';
import { UserRoutes } from '../user/user.routes.js';
import { ProductsRoutes } from '../products/products.routes.js';
import { CommerceRoutes } from '../commerce/commerce.routes.js';
import { validateFields } from '../common/middlewares/expressValidator.js';

export class AppRoutes {
    
    static getRoutes() {
        const router = Router();


        router.use(validateFields);
        router.use('/users', UserRoutes.routes);
        router.use('/products', ProductsRoutes.routes);
        router.use('/commerce', CommerceRoutes.routes);
        
        
        return router;
    };

};
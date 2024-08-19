import { ProductModel } from './products.model.js';


export class ProductService {
    constructor() {
        this.ProductModel = ProductModel;
    }
    
        async getAll() {
            return await this.ProductModel.find();
        };
    
        async get(id) {
            return await this.ProductModel.findOne({ _id: id });
        };

        async create(product) {
            return await this.ProductModel.create(product);
        };

        async update(id, product) {
            const update = await this.ProductModel.updateOne({ _id: id }, product);
            if (update.nModified === 0) {
                throw new CustomError('Product not found', 404);
            }
            return update;
        };

        async delete(id) {
            const product = await this.ProductModel.deleteOne({ _id: id });
            if (product.deletedCount === 0) {
                throw new CustomError('Product not found', 404);
            }
            return product;
        };

};
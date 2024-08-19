import { ProductModel } from './products.model.js';


export class ProductService {
    constructor() {
        this.ProductModel = ProductModel;
    }

    async getAll() {
       return await this.ProductModel.find();
    };

    async getById(id) {
        return await this.ProductModel.findOne({ _id: id });
    };

    async create(product) {
        const productCreated = new this.ProductModel(product);
        return await productCreated.save();
    };

    async update(id, product) {
        const update = await this.ProductModel.updateOne({ _id: id }, product);
        if (user.modifiedCount === 0) {
            throw new error('Product not found', 404);
        }
        return update;
    };

    async delete(id) {
        const product = await this.ProductModel.deleteOne({ _id: id });;
        if (user.deletedCount === 0) {
            throw new error('Product not found', 404);
        }
        return product;
    };

};
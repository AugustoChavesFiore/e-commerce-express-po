import { CommerceModel } from "./commerce.model.js";



export class CommerceServices {
    constructor() {
        this.CommerceModel = CommerceModel;
    }
    async getCommerces() {
        return await this.CommerceModel.find();
    }
    async getCommerce(id) {
        return await this.CommerceModel.findById(id);
    }
    async createCommerce(commerce) {
        return await this.CommerceModel.create(commerce);
    }
    async updateCommerce(id, commerce) {
        return await this.CommerceModel.findByIdAndUpdate(id, commerce, { new: true });
    }
    async deleteCommerce(id) {
        return await this.CommerceModel.findByIdAndDelete(id);
    }
}
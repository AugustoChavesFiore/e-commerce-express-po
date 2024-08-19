import { CommerceModel } from "./commerce.model.js";



export class CommerceServices {
    constructor() {
        this.CommerceModel = CommerceModel;
    }
    async get() {
        return await this.CommerceModel.find();
    }
    async getById(id) {
        return await this.CommerceModel.findById(id);
    }
    async create(commerce) {
        return await this.CommerceModel.create(commerce);
    }
    async update(id, commerce) {
        return await this.CommerceModel.findByIdAndUpdate(id, commerce, { new: true });
    }
    async delete(id) {
        return await this.CommerceModel.findByIdAndDelete(id);
    }
}
import { UserModel } from './user.model.js';


export class UserServices {
    constructor() {
        this.userModel = UserModel;
    }
    async getUsers() {
        return await this.userModel.find();
    }
    async getUser(id) {
        return await this.userModel.findOne({ _id: id });
    }
    async createUser(user) {
        const userCreated = new this.userModel(user);
        return await userCreated.save();
    }
    async updateUser(id, user) {
        const update = await this.userModel.updateOne({ _id: id }, { $set: user });
        if (user.affected === 0) {
            throw new Error('User not found');
        };
        return update;
    }
    async deleteUser(id) {
        const user = await this.userModel.deleteOne({ _id: id });
        if (user.affected === 0) {
            throw new Error('User not found');
        };
        return user;
    }
}
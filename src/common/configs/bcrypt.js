
import bcrypt from 'bcrypt';

export const Crypt = {
    hash: async (password) => {
        return await bcrypt.hash(password, 10);
    },
    compare: async (password, hash) => {
        return await bcrypt.compare(password, hash);
    }

};
import { jwt } from 'jsonwebtoken';
import { env  } from '../configs/env.js';
export class JWToken {
    
    static sign(payload) {
        return jwt.sign(payload, env.SECRET_KEY, { expiresIn: '1h' });
    }
    
    static verify(token) {
        return jwt.verify(token, env.SECRET_KEY);
    }
    
};



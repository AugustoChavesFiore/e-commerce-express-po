

export const rolesValidator = (role) => {
    const middleware = (req, res, next) => {
        if (req.user.role === role) {
            next();
        } else {
            res.status(403).json({ message: 'You are not allowed to access this resource' });
        }
    };
    return middleware;
};


    

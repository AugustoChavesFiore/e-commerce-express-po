
import { UserServices } from "../../user/user.service";
import { JWToken } from "../configs/jwt";

export const getUser = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = JWToken.verify(token);
    const userServices = new UserServices();
    const user = userServices.getUser(decoded._id);
    req.user = user;
    next();    
  } catch (error) {
    res.status(403).json({ message: 'You are not allowed to access this resource' });
  }
}
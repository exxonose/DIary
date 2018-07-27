import {Router} from 'express';
import AuthController from '../../controllers/AuthController';

const authRoutes = Router();

authRoutes.post('/users/signup', AuthController.signup);
authRoutes.post('/users/signin', AuthController.signin);

export default authRoutes;



import {Router} from 'express';
import AuthController from '../../controllers/DiaryController';

const diaryRoutes = Router();

diaryRoutes.get('/entries', DiaryController.getEntries);
diaryRoutes.post('/entries', DIaryController.createEntry);
diaryRoutes.get('entries/:id', DiaryController.getEntry);
diaryRoutes.put('/entries/:id', DiaryController.updateEntry);

export default diaryRoutes;



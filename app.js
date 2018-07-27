import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from './server/routes/authRoutes';
import diaryRoutes from './server/routes/diaryRoutes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());


app.get('/api/v1', authRoutes);
app.get('/apiv2', diaryRoutes);


app.get('/', (req, res) => {
res.send('Hello World');
})


app.listen(process.env.PORT || 8000);

export default app;
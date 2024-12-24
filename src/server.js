import express from 'express';
import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';

const PORT = 4000;

const app = express();

app.set('view engine', 'pug');
app.set('views', process.cwd() + '/src/views');
app.use('/', globalRouter);
app.use('/videos', videoRouter);
app.use('/users', userRouter);

const handleListening = () => console.log(`Server listenting on port ${PORT}`);

app.listen(PORT, handleListening);

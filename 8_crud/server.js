import express from 'express';
import userRouter from './src/routers/userRouter.js'


const app = express();

// POST veya PATCH isteklerinde gönderilen body'i okunabilir hale getirir
// Body Parser MIDDLEWARE (MW)
app.use(express.json());


app.get('/', (req,res)=>{
    res.status(200).send('Sunucuya istek attınız.')
})

// * app.use('/naber', userRouter);

// * 'http://localhost:4000/naber/users/v2'

app.use('/users', userRouter)
// ^ /users rotasına atılan istekleri userRouter.js dosyası yönetsin anlamına gelir.

const PORT = 4000;

app.listen(PORT, ()=>{
    console.log(`Sunucu ${PORT} portunda dinlemeye başladı.`)
})
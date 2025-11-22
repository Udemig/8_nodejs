const express = require('express');
const { getUsers, addUser } = require('./express/functions/userController');

// Bir ekspres sunucu örneği alırız.
const app = express();


// ^ atılan isteklerin "body" lerini okuyabilmek için çağırdığımız MiddleWare (MW)
app.use(express.json())




// Express rotalarını(endpoint) belirliyoruz.
// app.get('/users', (req, res) => {
//     res.status(200).send('Express sunucunun users tarafına GET istek attınız.')
// })

// app.post('/users', (req, res) => {
//     res.status(201).send('Express sunucunun users tarafına POST isteği attınız.')
// })

// ---------------------- ÜSTTEKİLERİ ŞÖYLE BİRLEŞTİREBİLİRİZ.

app.route('/users')
    .get(getUsers)
    .post(addUser)
// --------------------------------------------

app.route('/posts')
    .get((req,res)=>res.send('Gönderiler tarafına get isteği attınız.'))
    .post((req,res)=>res.send('Gönderiler tarafına POST isteği attınız.'))

const PORT = 2000;

app.listen(PORT, () => {
    console.log('Sunucu ayağa kalktı.')
})

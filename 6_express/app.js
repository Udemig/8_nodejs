//^ const express = require('express'); COMMONJS import yöntemi
//^ import express from 'express'; MODULE import yöntemi

// önce express kütüphanesini import ederiz
import express from 'express';
import userRouter from './routers/userRouter.js'
import postRouter from './routers/postRouter.js'


// ? express kullanarak bir uygulama(sunucu) örneği alırız.

// const server = http.createServer() // düz nodejs kullansaydık
const app = express(); // * express yöntemi


// middlewareler ve rotaların(endpointler) belirlenmesi gerekir.

app.get('/', (req, res) => {

    res.status(200).send('Sunucu sağlık testi başarılı.')
})

// kullanıcı endpointi istekleri
app.use('/users', userRouter)

// gönderi endpointi istekleri
app.use('/posts', postRouter)


// * catch-all Route (geri kalan hepsini yakalayan rota) -- eskiden '*' kullanırdık fakat son sürümde kaldırılmış onun yerine hiçbir path vermiyoruz
app.use((req,res)=>{
    res.status(404).send('İstek attığınız endpoint veya method geçersiz.')
})






// sunucuyu ayağa kaldırma kısmı
const PORT = 4000;

app.listen(PORT, () => {
    console.log('Sunucu başlatıldı!')
})





//^ module.exports = blabla;  // COMMONJS EXPORT YÖNTEMİ
//^ export default blabla;   // MODULE EXPORT YÖNTEMİ
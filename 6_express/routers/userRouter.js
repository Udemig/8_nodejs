
// Yönlendirici Nasıl Oluşturulur

// Sanki app'te rota belirliyormuş gibi yolları belirleriz, fakat bunları app.get gibi değil de router.get gibi yazarız.

// Bunun için yapmamız gereken tek şey express'ten bir router import etmek ve örneğini almaktır.


import express from 'express'

const router = express.Router();

router
    .route('/v1') // routerı çağıran şey hangi endpointi verdiyse ona atılan istekleri yönet anlamına gelir
    // mesela app.js'te bu routerı /users endpointinde kullanıyoruz, dolayısıyla alttaki .get isteği
    // /users'a atılan GET isteklerini kontrol edecek.

    //^ iki ayrı GET isteği örneği - birincisi ana route'tan çekiyor
    .get((req, res) => {
        res.status(200).send('Kullanıcılara GET isteği atıldı.')
    })
    .post((req, res) => {
        res.status(201).send('Kullanıcılara POST isteği atıldı.')
    })
    .patch((req, res) => {
        res.status(200).send('Kullanıcılara PATCH isteği atıldı.')
    })
    .delete((req, res) => {
        res.status(204).send('Kullanıcılara DELETE isteği atıldı.')
    })


router
    .route('/v2')
    // ^ ikincisi kendi yolunu belirliyor
    .get((req, res) => {
        res.status(200).send("Versiyon 2'ye GET isteği atıldı.")
    })

router
    .route('/v3')
    .get((req,res)=>{
        res.status(200).send("Versiyon 3'e GET isteği atıldı.")
    })



// catch-all method(geri kalan hepsini yakalayan rota)
router
    .use((req,res)=>{
        res.status(404).send("Bu routerın sadece v1, v2 ve v3 sürümleri bulunmaktadır.")
    })


// routera atılan istekleri karşıladıktan sonra routerı export ederiz.

export default router;

// Ardından app.js'te routerı import eder ve bu isteklerin hangi endpointe ait olduğunu APP.JS'te belirtiriz.
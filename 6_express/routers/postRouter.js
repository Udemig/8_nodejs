import express from 'express';

const router = express.Router();

router.route('/')
    .get((req,res)=>{
        res.status(200).send('Gönderiler tarafına GET isteği attınız.')
    })
    .post((req,res)=>{
        res.status(200).send('Gönderiler tarafına POST isteği attınız.')
    })
    .patch((req,res)=>{
        res.status(200).send('Gönderiler tarafına PATCH isteği attınız.')
    })
    .delete((req,res)=>{
        res.status(200).send('Gönderiler tarafına DELETE isteği attınız.')
    })

router
    .use((req,res)=>{
        res.status(404).send("Bu routerın sadece v1 sürümü bulunmaktadır.")
    })

export default router;
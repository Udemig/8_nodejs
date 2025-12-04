import express from 'express';
import fs from 'fs';
import { createUser, getAllUsers } from '../controllers/userController.js';

// Express kütüphanesinden gelen Router özelliğini kullanarak bir router oluşturacağız

const router = express.Router();

//  tek slash (/) URL'nin sonuna herhangi bir şey ekleme anlamına gelir. 
// ^ önceki kısımda bize '/naber' geldiği için direkt /naber kısmına get put patch isteği atabilirdik.

// '/users' deseydik bu URL'nin sonuna /users eklenmesi gerekir anlamına gelir.



router.route('/') // id parametresi olmadan atılabilecek iki istek vardır: GET ve POST
    // ^ ID vermeden atılan get isteği, o türdeki bütün elemanları bize gönderir.
    // * Mesela users'a id parametresi olmadan attığımız get isteği bütün kullanıcıları bize getirmelidir
    .get(getAllUsers)
    // ^ POST isteği ID vermeden atılır, çünkü daha önce veritabanında bulunmayan bir şeyi oluşturuyoruz.
    // Dolayısıyla ID vermenin hiçbir anlamı yoktur.
    .post(createUser)
    

export default router;
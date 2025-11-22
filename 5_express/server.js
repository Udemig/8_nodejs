// * Düz Node.js HTTP Sunucusu Örneği

const http = require('http');
const fs = require('fs');
const bodyParser = require('./utils/bodyParser')


const server = http.createServer(async (req, res) => {

    console.log("ENDPOINT:", req.url)
    console.log("METOD:", req.method)

    const URL = req.url;
    const METHOD = req.method;

    if (URL == '/users') {

        if (METHOD == 'GET') {
            // users.json dosyasını okuyup çözümlüyoruz(parse) çünkü göndereceğimiz cevabın en dış katmanı JSON iken, 
            // içeriğinde JSON bulunmamalı.
            const users = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8'));

            res.statusCode = 200;

            // gönderilecek cevabın içeriğini belirle ve JSON'a çevir
            const responseData = JSON.stringify({
                success: true,
                message: "Kullanıcılar başarıyla getirildi.",
                veriler: users
            })

            // gönder
            res.end(responseData)
        }

        // yeni kullanıcı ekleme methodu
        if(METHOD == 'POST') {
            // kullanıcılar dosyasını oku
            let users = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8'))
            const reqBody = await bodyParser(req);

            // * POST methodlarında atılan isteğin GET methodunda olmayan bir kısmı mevcuttur: BODY
            // * Body, kullanıcının sunucuya veri göndermesini sağlayan istek parçasıdır.

            // ! Düz nodejs sunucularında body okuması mevcut değildir.
            // ? Çünkü istek bodyleri düz bir veri değil, bir veri akışı (data stream) nesnesidir.

            // istemcinin gönderdiği body'deki kullanıcıyı okuduktan sonra bunu yukarıda okuduğumuz users dizisinin sonuna ekleyebiliriz.
            // users = [...users, reqBody] // * BU DA OLUR
            users.push(reqBody)

            //^ yeni kullanıcının eklendiği güncel diziyi, users.json'ın üzerine YAZMAMIZ lazım ki sonradan erişebilelim

            fs.writeFileSync('./data/users.json', JSON.stringify(users));

            // * Bir veriyi güncellerken, üzerine ekleme yaparken, silerken vs. hep JavaScript formatında bulunmalıdır (parse edilmiş)

            // * Bir veriyi saklarken(dosya olarak) veya uzak bir yere gönderirken(sunucudan istemciye) veri her zaman JSON formatında bulunmalıdır.

            res.statusCode = 201;
            res.end('Kullanıcı başarıyla eklendi.')
        }

        return;
    }

    if (URL == '/posts') {
        res.statusCode = 200;
        res.end('Gönderiler tarafına istek attınız.')
        return
    }

    if (URL == '/') {
        res.statusCode = 200;
        res.end('Sunucu çalışıyor.')
        return
    }

    res.statusCode = 404;
    res.end(`İstek attığınız endpoint(${URL}) sunucuda mevcut değil.`)

});


const PORT = 4500;

server.listen(PORT, () => {
    console.log('Sunucu çalışmaya başladı.')
})
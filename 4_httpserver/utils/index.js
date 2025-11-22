const fs = require('fs');

const requestHandler = (req, res) => {

    console.log('ISTEK ENDPOINTI: ', req.url)

    const Q = req.url

    // localhost:4000'den sonra /health gelirse şu cevabı gönder
    if (Q == "/health") {
        res.statusCode = 200;
        res.end('Sunucu sağlıklı')
        return;
    }

    if (Q == '/users') {

        const users = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'))

        res.statusCode = 200;
        // Komple cevabı düz JS olarak göndermek mümkün değil.

        // JSON formatına çevirmek gerekir. (JSON.stringify)

        // users zaten normalde de json olarak tutulduğu için iki kere json yapmış olmamak adına users'ı JSON.parse ile deşifre ediyoruz.

        // ^ parse => JSON'dan JS'e geri çevirir(çözümler)
        // ^ stringify => JS formatından JSON'a çevirir (kodlar)

        // ^ veri iletimi sırasında (backendden frontende YA DA frontendden backende fark etmez) veri mutlaka JSON türünde olmalı(gönderilecek kargoyu paketlemek gibi) gideceği yere vardıktan sonra JSON.parse ile json'dan okunabilir formata geri çeviririz.

        // * ALTIN KURAL: en dış cevap nesnesi JSON formatında olmalı, içerikler JSON formatında OLMAMALI

        res.end(JSON.stringify({
            success: true,
            message: "Kullanıcılar başarıyla getirildi.",
            data: users
        }))
        return;
    }

    if (Q == '/posts') {

        const posts = JSON.parse(fs.readFileSync('./data/posts.json', 'utf-8'))

        res.statusCode = 200;

        res.end(JSON.stringify({
            success: true,
            message: "Gönderiler başarıyla getirildi.",
            count: posts.length,
            data: posts
        }))
        return;
    }

    // başka herhangi bir durumda ise bilinmeyen yol cevabı gönder
    res.statusCode = 404;
    res.end('Bu endpoint sunucuda tanımlı değil (404)')

}

// export default => Varsayılan olarak node.js'te import ve export anahtar kelimeleri kullanılamaz.
// onun yerine import için require, export içinse module.exports yöntemlerini kullanırız.

// anlamı: bu modülden export edilen(dışa aktarılan) veriler şunlardır => requestHandler
module.exports = requestHandler
// http sunucusu oluşturmak için gereken alet edevat(utilities) içeren modül
const http = require('http')

// bir http sunucusu oluşturup, bu sunucuyu server adlı bir değişkenin içerisinde saklayalım.

// ^ bu tarz fonksiyonların parametrelerini kullanırken gözetmemiz gereken 3 ana kural vardır:
// 1) parametrelere verdiğiniz isim önemli değildir

// 2) parametrelerin sıralaması önemlidir (req,res) != (res,req) (2. hali yanlıştır)

// 3) parametreye ne isim verdiyseniz, içeride de aynı ismi kullanmak zorundasınız

const server = http.createServer((req, res) => {
    // bu yazı sadece geliştirici için görünürdür, çünkü console'a yazdığımız şeyler sadece sunucuda gözükür.
    console.log('Merhaba dünya, başarıyla istek attınız!')

    // // bu yüzden kullanıcıya da bir cevap(res) göndermek gerekir

    // // cevabın durum kodu
    // res.statusCode = 200;

    // // res.end cevabı gönderir, içine verdiğimiz yazı mesaj olarak gider
    // res.end('Node.js sunucusuna hoşgeldiniz!')

    console.log("\nİSTEĞİN METODU:", req.method)

    switch (req.method) {
        case 'GET':
            res.statusCode = 200
            res.end('Başarıyla GET isteği attınız!')
            break;
        case 'POST':
            res.statusCode = 201
            res.end('Başarıyla POST isteği attınız!')
            break;
        case 'PUT':
            res.statusCode = 201
            res.end('Başarıyla PUT isteği attınız!')
            break;
        case 'PATCH':
            res.statusCode = 201
            res.end('Başarıyla PATCH isteği attınız!')
            break;
        case 'DELETE':
            res.statusCode = 200
            res.end('Başarıyla DELETE isteği attınız!')
            break;
        default:
            res.statusCode = 405;
            res.end('Attığınız isteğin metodu kabul edilmiyor.')
            break;

    }

    const mtd = req.method;

    if (mtd == 'GET') {
        res.statusCode = 200
        res.end('Başarıyla GET isteği attınız!')
    }
    else if (mtd == 'POST') {
        res.statusCode = 201
        res.end('Başarıyla POST isteği attınız.')
    }
    else if (mtd == 'PUT' || mtd== 'PATCH'){
        res.statusCode = 201;
        res.end('Başarıyla PUT/PATCH isteği gönderdiniz.')
    }
    else if(mtd == 'DELETE'){
        res.statusCode = 204;
        res.end()
    }
    else{
        res.statusCode = 400;
        res.end('Attığınız isteğin metodu kabul edilmiyor!')
    }

})



// sunucunun dinlemesini sağlamak
server.listen(3000, () => {
    console.log('Sunucu çalışmaya başladı.')
})

// sonrasında nodejs ile ayağa kaldırırız (node server.js)
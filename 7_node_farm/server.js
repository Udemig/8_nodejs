const express = require('express')
const fs = require('fs');
const createHTML = require('./helpers/createHTML.js')

// yazdığımız HTML şablonları yazı verisi olarak okuyoruz ki sonrasında kullanıcıya gönderebilelim
let overviewHTML = fs.readFileSync('./templates/overview.html', 'utf-8')
let cardHTML = fs.readFileSync('./templates/card.html', 'utf-8')

// data.json'ı okuyoruz ki, bundaki verileri kullanarak overviewHTML'e kartlarımızı ekleyebilelim
const cardsData = JSON.parse(fs.readFileSync('./dev-data/data.json', 'utf-8'))

// express sunucu örneği al
const app = express();

// ana sayfaya istek atılırsa hoşgeldiniz de
app.get('/', (req, res) => {
    res.status(200).send('Sunucuya hoşgeldiniz')
})

// overview sayfasına istek atılırsa overviewHTML'i gönder
app.get('/overview', (req, res) => {


    // bir dizi elemanın hepsinin üzerinde bir şey yapmak istiyorsak map fonksiyonu kullanırız mapin içerisine verdiğimiz fonksiyon her bir eleman için bir kere çalışır.

    // map ile bütün ürünlerden teker teker "card" oluştur, sonrasında bu card htmllerimi içeren diziyi join methodu ile tek bir string(yazı) haline getir.

    // map => dizi dönme fonksiyonu, dizinin içerisindeki elemanları sırayla dönmemize yarar.
    const readyCards = cardsData.map((item) => createHTML(cardHTML, item)).join('')

    console.log(readyCards)


    overviewHTML = overviewHTML.replace('{%PRODUCT_CARDS%}', readyCards)


    res.status(200).send(overviewHTML)
})

// product sayfasına istek atılırsa productHTML'i gönder
app.get('/product', (req, res) => {

    // en yukarda yazsaydık ilk aradığımız ürünü ortak zannedecekti ve hep onu gösterecekti, burada yazdığımızda ise her seferinde tekrardan html'i okur
    let productHTML = fs.readFileSync('./templates/product.html', 'utf-8')

    // = yazısına göre stringi ikiye bölüp ikinci kısmı yani ID değerini aldık
    // console.log("QUERY NESNESI:", req.url.split('=')[1])

    // daha basit yöntemi şudur
    const productID = req.query.id

    // kullanıcının gittiği sayfada hangi ürünün gözükmesi gerektiğini anlamak için parametreyi aldık

    // şimdi sıra bu ID'yi data.json'ın içerisinde aratıp gereken ürünü bulmaya geldi.

    const searchProduct = cardsData.find((item) => item.id == productID)

    console.log("ARANAN ÜRÜNÜN VERİSİ: \n \n", searchProduct)

    // doğru ürünü(kullanıcının aradığı ürün) bulduktan sonra geriye kalan tek şey örnek product.html şablonunu, bulduğumuz ürünün asıl verileriyle doldurup yer tutucuları kaldırmaktır.

    productHTML = createHTML(productHTML, searchProduct)

    res.status(200).send(productHTML)

})


app.listen(4000, () => console.log('\nSUNUCU ÇALIŞMAYA BAŞLADI.\n'))
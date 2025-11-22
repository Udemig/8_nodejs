// bir dosyadan yazı alıp başka bir dosya oluşturma

const fs = require('fs');

const baslik = fs.readFileSync('./data/title.txt', 'utf-8');
console.log(baslik)

// İsmi bu başlık olan yeni bir dosya oluşturalım.

const icerik = fs.readFileSync('./data/content.txt', 'utf-8');

fs.writeFileSync(`./output/${baslik}.txt`, icerik)
console.log('Dosya başarıyla yazıldı.')


// öncelikle fs modülü import edilir
const fs = require('fs');


// title.txt'nin içeriği okunur

const baslik = fs.readFileSync('./data/title.txt', 'utf-8');
console.log(baslik)

// content.txt'nin içeriği okunur

const icerik = fs.readFileSync('./data/content.txt', 'utf-8')
console.log(icerik)

// .txt => Plain Text (Düz Yazı)

// bu 
// ^ isim(title.txt'nin içeriği) 
// ve 
// ^ içeriği(content.txt'nin içeriği) 
// kullanarak .txt uzantılı bir dosya oluşturalım
fs.writeFileSync(`./output/${baslik}.txt`, icerik);
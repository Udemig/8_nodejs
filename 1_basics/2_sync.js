// ^ Modüller: Modül Node.js'in farklı görevleri tamamlamak için özel olarak tasarlanmış parçalarıdır.

// Örneğin bir dosyayı okumak veya üzerine yazmak istersek başvurmamız gereken modül "fs" modülüdür.
// Veya internetten bir siteye istek atmak için başvurmak gereken modül "HTTP" modülüdür.

// Diğer bir anlamıyla modül node.js ile gelen hazır yazılmış kodlardır denebilir.

// ? Node.js'te modül kullanımı için önce çağırmak gerekir

// require anahtar kelimesi importa benzer, dışarıdan dosya veya modül çekmeye yarar.

const fs = require('fs')

// * SENKRON - ASENKRON

// ? Senkron (Sync)
// Senkron bir işlem kendisi tamamlanıncaya kadar başka hiçbir kodun çalışmasına izin vermez.
// Dolayısıyla işlem bitene kadar alt satırdaki hiçbir kod çalışmaz.

// Senkron işlemler büyük verilerde işlem yaparken bekleme süresini çok arttırır ve performansı düşürür.
// Bunun sebebi Node.js tek iş parçacığı(thread) çalıştığı için senkron bir işlem devam ederken diğerlerinin beklemeye alınmasıdır.


// ^ Senkron Nerede Kullanılmalı?
// Küçük, basit veya beklemenin kritik olduğu işlemlerde kullanırız.

// * 1) Dosya Okuma

const text = fs.readFileSync('./data/yazi.txt', 'utf-8');

// okunan dosyayı konsolda görelim

console.log(text)



// * 2) Dosya Yazmak (Güncellemek)

// yazılacak metni hazırlayalım

const newText = 'Nasılsınız arkadaşlar?'

// ? eğer path parametresinde belirtilen dosya mevcut değilse oluşturur,
// ? mevcutsa içeriğini verilen yazı ile günceller.
fs.writeFileSync('./data/output.txt', newText)
console.log('Dosya yazma işlemi başarılı.')


// * 3 ) Dosya Silme

// fs.unlinkSync('./data/bozuk.txt');
console.log('\n\nDosya silme işlemi tamamlandı.')


// * 4 ) Dizin (klasör) oluşturma

// fs.mkdirSync('./challenge')
console.log('\n\nKlasör oluşturma işlemi tamamlandı.')

// * 5) Dizin VEYA dosya ismi değiştirme

fs.renameSync('./challenge', './newChallenge')
console.log('\nİsim değiştirme işlemi tamamlandı.')
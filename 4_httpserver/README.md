# Nodemon

Nodemon kütüphanesi bizi Node.js projelerinde dosyalarda yaptığımız her bir değişiklikten sonra sunucuyu tekrar ayağa kaldırma zorunluluğundan kurtarır. Biz bir dosyayı her kaydettiğimizde kendine sunucuyu kapatıp tekrar açar.

>npm i nodemon


# Örnek Nodejs HTTP Sunucu Oluşturma
## original.js

1) Nodejs'ten 'http' modülü import edilir.

2) Modülü kullanarak kendimize bir sunucu kopyası oluşturur ve bir değişkende tutarız.

3) Sunucu kopyasının içindeki callback fonksiyonu(bir istek atıldığında çalışan fonksiyonu) sunucumuzun ihtiyaçlarına göre düzenleriz.

4) Sunucunun ayağa kalkması için server.listen() komutunun içerisinde çalışılacak portu ve ayağa kalktığında çalışacak callback(cb) fonksiyonu gireriz.

5) Sunucuyu ayağa kaldırırız. (node app.js VEYA nodemon ile script yapılabilir)

## İmport-Export

Varsayılan JS'in aksine NodeJS'te ayarlama yapılmadan(default olarak) import ve export anahtar kelimeleri çalışmaz.
Onun yerine:

import yerine require,
export yerine module.exports

yöntemleri kullanılır.
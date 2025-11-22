const fs = require('fs');

/* 
* ASENKRON 

Asenkron işlemler başlatıldığında diğer işlemler sekteye uğramaz ve diğer işlemlerin çalışması için asenkron işlemlerin bitmesi gerekmez. Asenkron işlem birden fazla iş parçacığı kullanabilir.

? Asenkron birden fazla işlemi aynı anda yapabildiği için 10 tane asenkron işlemin bitiş süresi en büyük işlemin süresiyle aynıdır.

! Senkron işlemlerde ise birden fazla işlem aynı anda çalışamadığı için 10 tane asenkron işlemin bitiş süresi bütün işlemlerin süresinin toplamına eşittir

ASENKRON => VERİ OKU (1024 MB)

ASENKRON => VERİ YAZ (10kb)

ASENKRON => VERİ SİL (500 MB)

SENKRON
1024 + 10kb + 100mb => 1524.10 mb => 15s

ASENKRON
1024 MB => 1024mb => 10s

    ^ Asenkron İşlemler Nerede Kullanılır?
    Performans ve vakitten tasarruf öncelikli olduğunda ve kullanıcıyı bekletmek istemediğimiz yerlerde asenkron kullanmak en mantıklısıdır.
    Büyük dosya ya da fazla girdi-çıktı işlemi varsa yine asenkron tercih etmek en mantıklısıdır.

*/


// ^ Node.JS'te fs modülü işlemleri normalde asenkrondur, sonuna Sync koyarak senkron hallerini seçeriz.


// Async işlemlerin kod yazımı açısından senkron işlemlerden bir farkı vardır
// O da async işlemler, bittiklerinde çalışacak bir callback(işlem bitiminde çağırılacak) fonksiyon isterler.

// ASENKRON OKUMA

fs.readFile('./asyncData/örnek.txt', 'utf-8',
    // callback fonksiyonumuz (okuma işlemi bittiği an otomatik çağrılacak fonksiyon)
    (err, data) => {
        if (err) {
            return console.log('\n Bir hata oluştu: ', err)
        }
        console.log('\nOkuma işlemi tamamlandı: \n\n', data)
    }
)

// ASENKRON YAZMA (GÜNCELLEME)

const text = "8. Sezon Backendden herkese selamlar!!!"

fs.writeFile('./asyncData/çıktı.txt', text,
    (err) => {

        // eğer hata olursa parantezi çalıştır (parantezin içinde return var yani kodun geri kalanını iptal edecek)
        if (err) {
            // return => hata oldu, kodumun geri kalanını artık çalıştırma!
            return console.log('Yazma işlemi hatalı: ', err)
        }

        // if (password!="1234"){
        //     return console.log('Şifreniz hatalı!')
        // }

        // if (username!="admin"){
        //     return console.log('Kullanıcı adı hatalı!')
        // }

        // * Yukarıda hata olduğunda return çalıştırdığımız için, bu yazı sadece hata olmama durumunda konsola basılacak çünkü eğer hata olsaydı return çalışmış olacağı için fonksiyon bu satıra kadar asla gelemeyecekti.
        console.log('Yazma işlemi başarıyla tamamlandı. ZAMAN DAMGASI: ', Date.now())

    }
)


// ASENKRON SİLME

fs.unlink('./asyncData/bozuk.txt',
    (err) => {
        if (err) {
            return console.log('Silme işleminde hata meydana geldi: ', err)
        }

        console.log('Silme işlemi başarıyla tamamlandı. ZAMAN DAMGASI: ', Date.now())

    }
)


// ^ Zincirleme İşlemler => ÖRN. Okuma işleminin yazma işlemine bağlı olduğu bir işlem zinciri

fs.writeFile('./asyncData/zincirleme.txt', 'merhabalar, zincirleme işlem dosyası', (err) => {
    if (err) {
        return console.log("\n\nZincirleme yazma fonksiyonunda hata!")
    }

    const text = fs.readFileSync('./asyncData/zincirleme.txt', 'utf-8')

    console.log('\n\nDosya zincirleme biçimde başarıyla yazıldı ve okundu. \n\n Dosya İçeriği:', text)

})
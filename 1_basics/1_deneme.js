// Tarayıcı JavaScript'inde çalışan neredeyse her şey Node.js'te de çalışır.

console.log("Merhaba Dünya!")

// Node.js kodu çalıştırmak için .js uzantılı dosyamızı hazır ederiz. Ardından terminali açıp:
// "node dosyaismi" komutuyla dosyayı çalıştırabiliriz.

// \n => bu karakter terminalde bir satır boşluk koyar, iki tane koyarsak iki satır boşluk koyar(br muadili)
// \t => bu karakter yazıların arasına boşluk koyar, space tuşu muadilidir. (deprecated = eskimiş)

console.log("\nYoklama\tListesi:")

const students = ['Enes', 'Meryem', 'Özge', 'Sara'];

// .forEach => sana verdiğim dizinin içindeki her bir eleman için, içeride vereceğim fonksiyonu çalıştır

// ? forEach içerisine verilen fonksiyon 2 parametre alır, bunlara verilen isim önemli değildir.
// * birincisi o an üzerinden geçtiğimiz elementin kendisidir, ikincisi ise o elementin dizi içindeki sıra numarasıdır.

students.forEach((name, index) => {
    console.log(index + " no'lu öğrenci " + name + ' burada!')
})


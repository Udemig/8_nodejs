import fs from 'fs';

export const getAllUsers = (req, res) => {

    // ! Node.js'in FS modülü package.json'ı kök dosya olarak alır, dolayısıyla okuyacağımız dosyaya giden yolu içinde bulunduğumuz dosyaya göre değil, package.json'a göre yazarız.
    const users = JSON.parse(fs.readFileSync('./data/user.json', 'utf-8'));

    console.log(users);

    res.status(200).json({
        success: true,
        message: "Tüm kullanıcılar başarıyla getirildi.",
        data: users
    })
}


// method => bir nesnenin içerisinden çekilen fonksiyona denir

// fonksiyon => kendi başına bağımsız fonksiyona denir.



// const banka = {
//     balance: 10000,
//     showBalance: function () {
//         console.log(this.balance)
//     }
// }

// ^ showBalance() methoddur çünkü nesnenin içerisinden gelir.
// banka.showBalance();

// ^ createUser() fonksiyondur çünkü kendi başına bağımsızdır.
// createUser()

// * Her method bir fonksiyondur, ama her fonksiyon bir method değildir.



export const createUser = (req, res) => {
    console.log(req.body);

    // * BODYDEN GELEN KULLANICI İÇİN ALAN KONTROLÜ
    // olması gereken alanları bir fields dizisi içerisinde tutup, her bir field req.body nesnesinin içinde var mı yok mu sırayla kontrol ettiriyoruz. Herhangi birisi yoksa hata döndürüyoruz.
    const fields = ['name', 'role', 'skills', 'experienceYears', 'location', 'email']

    fields.map((field) => {

        if (!req.body[field] || req.body[field].length == 0) {
            return res.status(400).send({
                success: false,
                message: `'${field}' alanı mutlaka doldurulmalıdır.`
            })
        }
    })
    // -------------------------------------------


    // User'ın şuan "id" değeri mevcut değil, o yüzden önce id eklemeliyiz.

    // ? req.body'i spread operatör ile kopyalamak yerine alanlarını bir bir almak daha mantıklıdır, çünkü kötü amaçlı verilerin sorgulanmadan alınmasını engeller.
    const newUser = {
        id: 100 + Math.round(Math.random() * 10000),
        name: req.body.name,
        role: req.body.role,
        skills: req.body.skills,
        experienceYears: req.body.experienceYears,
        location: req.body.location,
        email: req.body.email
    };

    // Güvenlik kontrolünü geçtikten sonra önce paketli json dosyasını paketten çıkarıcaz.
    // Sonra içine yeni elemanı ekleyeceğiz
    // Ardından en son halini tekrardan paketleyip user.json'ın üzerine tekrardan yazacağız.
    const users = JSON.parse(fs.readFileSync('./data/user.json', 'utf-8'))

    // diziye yeni kullanıcımızı ekliyoruz
    users.push(newUser);

    // diziyi tekrardan JSON paketleyip yazıyoruz.
    fs.writeFileSync('./data/user.json', JSON.stringify(users));

    // oluşturulan kullanıcıyı iyi alışkanlık olarak clienta geri göndermek yaygındır.
    res.status(200).send({
        success: true,
        message: "Kullanıcı başarıyla sisteme eklendi.",
        data: newUser
    })
}

## Express Özellikleri

### Router

Express'teki Router özelliği, belirli bir endpointe atılan(örn. users) farklı türdeki istekleri tek bir dosyada yönetip kod kirliliğini azaltan bir yöntemdir.

Express ile backend uygulaması oluştururken her bir endpoint (backendde erişilebilir her bir farklı nesne) için ayrı bir router kullanmamız gerekir.

Mesela kullanıcılar nesnesi için ve kullanıcılara atılan GET, POST, PATCH, DELETE gibi istekleri yönetecek bir Router oluşturmak gerekir ve bunu uygulamaya tanıtmamız gerekir(app.js)

Aynı şeyi gönderiler, videolar vs. gibi farklı veri türleri için de yapmak gerekir.

Bir routerın içerisinde .route() fonksiyonu kullanılarak dallanma da yapılabilir. Dallanma, ortak bir rotanın(örn. /users) altından iki veya daha fazla farklı endpoint çıkmasıdır. Mesela usersRouter'ın altında .route('/v1') ve .route('/v2') kullanılırsa users rotasına atılan isteklerin sonuna v1 ve v2 kelimeleri de eklenmesi gerekir bu da atılan isteklerin farklı yönetilmesini sağlar.

<!-- app.route('/users')

    .get((req, res) => {
        res.status(200).send('Kullanıcılara GET isteği atıldı.')
    })

    .post((req, res) => {
        res.status(201).send('Kullanıcılara POST isteği atıldı.')
    })

    .patch((req, res) => {
        res.status(200).send('Kullanıcılara PATCH isteği atıldı.')
    })

    .delete((req, res) => {
        res.status(204).send('Kullanıcılara DELETE isteği atıldı.')
    }) -->
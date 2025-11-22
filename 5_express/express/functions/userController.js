const getUsers = (req, res) => {
    res.status(200).send('Bu fonksiyon ayrı bir dosyadan çağrılıp kullanıldı.')
}

const addUser = (req, res) => {

    console.log('İsteğin Gövdesi: \n', req.body)


    res.status(201).send('Express sunucunun users tarafına POST isteği attınız.')
}

module.exports = { getUsers, addUser }
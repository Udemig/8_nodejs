// ^ 1. ADIM
const http = require('http');

// ^ 2. ADIM
const server = http.createServer(
    // ^ 3. ADIM
    (req, res) => {
        console.log('Sunucuya istek atıldı')

        res.statusCode = 200
        res.end('Sunucu sağlıklı biçimde çalışıyor.')
    }

);

const PORT = 4000

// ^ 4. ADIM
server.listen(PORT, () => {
    console.log(`Sunucu ${PORT} adresinden atılan istekleri dinlemeye başladı.`)
})

// ^ 5. ADIM

// npm run server
// npm run start
// ya da: npm start
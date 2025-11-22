const http = require('http');
const fs = require('fs');
const requestHandler = require('./utils/index')

const server = http.createServer(requestHandler)

const PORT = 4000

server.listen(PORT, () => {
    console.log('Sunucu ayağa kalktı (server.js)')
})
const bodyParser = (req) => {
    return new Promise((resolve, reject) => {
        let body = '';

        // isteği atan kişiden(tarayıcıdan, postmanden) gelen veri parçalarını yakala
        req.on('data', chunk => {
            // body'min yeni değeri, şuanki bodymin üzerine yeni veri parçasının eklenmiş halidir
            // her veri parçası(chunk) geldiğinde bodymin sonuna ekleniyor
            body = body + chunk.toString();
        });

        req.on('end', () => {
            // parsed, bizim yukarıda birleştirdiğimiz bodynin JSON'dan çözümlenmiş halidir
            const parsed = JSON.parse(body);
            resolve(parsed);
        })
    })

}

module.exports = bodyParser;
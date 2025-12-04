

// Örnek card.html dosyamızdaki yer tutucuları, gerçek ürün bilgisiyle değiştirecek bir fonksiyona ihtiyacımız var, çünkü bunu her birisi için manuel kod yazarak yapmaya çalışırsak kod tekrarına düşeceğiz.

// Mantık şöyle olacak, html parametresinde card.html'i, product parametresinde ise ekrana basılacak ürün verilerini alacağız (örn keçi peyniri)

// card.html'in içerisindeki yer tutucuları, ürünün içerisindeki verilerle değiştireceğiz (örn. {%IMAGE%} => 🌽 )

// En sonunda tamamen hazır bir ürün HTML'ine sahip olmuş olacağız.
const createHTML = (html, product) => {

        // çıktımızı (html'in bitmiş halini) output adındaki bir değişkende tutacağız - let kullanıyoruz çünkü üzerinde değişiklik yapacağız

        // html'e ismi enjekte ediyoruz
        let output = html.replace(/{%PRODUCTNAME%}/g, product.productName)

        // html'e resmi enjekte ediyoruz
        output = output.replace(/{%IMAGE%}/g, product.image)
        output = output.replace(/{%QUANTITY%}/g, product.quantity)
        output = output.replace(/{%PRICE%}/g, product.price)
        output = output.replace(/{%ID%}/g, product.id)
        output = output.replace(/{%FROM%}/g, product.from)
        output = output.replace(/{%NUTRITIENTS%}/g, product.nutrients)
        output = output.replace(/{%DESCRIPTION%}/g, product.description)

        return output
}

module.exports = createHTML;
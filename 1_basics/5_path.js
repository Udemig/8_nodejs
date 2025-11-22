const path = require('node:path');


// path => dosya dizin yolu anlamına gelir.

const dosyaYolu = './desktop/users/asyncData/zincirleme.txt';

// Kullanılabilecek PATH modülü metotları

// Dosyanın içinde bulunduğu klasörün yolunu verir.
console.log('dirname(): ', path.dirname(dosyaYolu), '\n')

// Dosyanın tam ismini(uzantısı dahil) verir.
console.log('basename(): ', path.basename(dosyaYolu), '\n')

// extension name dosya uzantı ismini verir.
console.log('extname(): ', path.extname(dosyaYolu), '\n' )



const yeniDosyaYolu = ['/media','photos','profile.png']

console.log('Bizim kendi join methodumuz:', yeniDosyaYolu.join(''), '\n')

// yolları birleştirme
console.log('join(): ', path.join(...yeniDosyaYolu), '\n');

// dosyanın mutlak konumunu (absolute path) çözümledi ve sundu.
console.log('resolve(): ', path.resolve('./asyncData/çıktı.txt'), '\n')

// yolu basitleştirmeye çalışır
console.log('normalize(): ', path.normalize('././asyncData/çıktı.txt'))
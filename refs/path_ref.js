const path = require('path')

console.log(path.basename(__filename)) // возвращает название файла из абсолютного пути
console.log(path.dirname(__filename)) // возвращает название папки
console.log(path.extname(__filename)) // расширение файла 

console.log(path.parse(__filename)) // возвращает объект с полями root, dir, base, ext, name
console.log(path.parse(__filename).ext)

console.log(path.join(__dirname, 'test', 'second.html')) // для генерации пути
console.log(path.resolve(__dirname, 'test', '/second.html')) // позволяет сделать корректный путь

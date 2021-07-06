const fs = require('fs')  // File System
const path = require('path')


// асинхр создание папки
fs.mkdir(path.join(__dirname, 'notes'), err => {
  if (err) throw err

  console.log('Папа была создана')
}) 

// асинх создание файла и контента в нем
fs.writeFile(path.join(__dirname, 'notes', 'mynotes.txt'),
  'Hello world',
  err => {
    if (err) throw err
    console.log('Файл был создан')

    fs.appendFile(
      path.join(__dirname, 'notes', 'mynotes.txt'),
      'From append file',
      err => {
        if (err) throw err
        console.log('Файл был изменен')


        // чтение из файла
      fs.readFile(
        path.join(__dirname, 'notes', 'mynotes.txt'),
        (err, data) => {
          if (err) throw err
          console.log(data)
        }
      )
      }
    )
  }
)

fs.rename(
  path.join(__dirname, 'notes', 'mynotes.txt'),
  path.join(__dirname, 'notes', 'notes.txt'),
  err => {
    if (err) throw err
    console.log('Файл переименован')
  }
)
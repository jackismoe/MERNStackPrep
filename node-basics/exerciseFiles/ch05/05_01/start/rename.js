const fs = require('fs')

fs.renameSync('./assets/colors.json', './assets/colorData.json')
fs.renameSync('./assets/notes.md', './storage-files/notes.md', err => {
  if (err) {
    throw err
  }
})

setTimeout(() => {
  fs.unlinkSync('./assets/alex.jpg')
}, 4000)
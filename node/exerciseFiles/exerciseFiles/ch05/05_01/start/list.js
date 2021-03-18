const fs = require('fs')
fs.readdir('./assets', (err, files) => {
  if (err) {
    throw err
  }
  console.log('finsished reading files')
  console.log(files)
})
console.log('started reading files')
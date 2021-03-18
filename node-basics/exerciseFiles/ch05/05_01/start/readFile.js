const fs = require('fs')

fs.readFile('./assets/alex.jpg', (err, image) => {
  if (err) {
    console.log(`an error has occured: ${err}`)
    process.exit()
  }
  console.log('file contents read')
  console.log(image)
})
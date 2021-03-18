const cp = require("child_process")

const questionApp = cp.spawn('node', ['questions.js'])

questionApp.stdin.write('Jackson\n')
questionApp.stdin.write('Atlanta\n')
questionApp.stdin.write('Build the future\n')
questionApp.stdout.on('data', data => {
  console.log(`from the question app: ${data}`)
})

questionApp.on('close', () => {
  console.log('questionapp closed')
})
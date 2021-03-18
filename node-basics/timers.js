const waitTime = 10000
const waitInterval = 500
let currentTime = 0

const incrementTime = () => {
  currentTime += waitInterval
  const percentage = Math.floor((currentTime/waitTime)*100)
  process.stdout.clearLine()
  process.stdout.cursorTo(0)
  process.stdout.write(`waiting ... ${percentage}%`)
}
const interval = setInterval(incrementTime, waitInterval);

const timerFinished = () => {
  clearInterval(interval)
  process.stdout.clearLine()
  process.stdout.cursorTo(0)
  console.log('done')
}

console.log(`setting a ${waitTime/1000} second delay`)
setTimeout(timerFinished, waitTime)
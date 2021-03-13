const collectAnswers = require("./lib/collectAnswers");

const questions = [
  'Who? ',
  'What? ',
  'When? ',
  'Where? ' 
]

const answerEvents = collectAnswers(questions)

answerEvents.on('answer', answer => {
  console.log(`question answered: ${answer}`)
})

answerEvents.on('complete', answers => {
  console.log('Thank you for answering. ')
  console.log(answers)
  process.exit()
})

answerEvents.on('complete', () => process.exit())
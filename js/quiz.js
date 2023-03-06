const questions = [
  {
    question: "When Jesus and His disciples were in a boat on the Sea of Galilee, what made the disciples afraid?",
    answers: [
      { text: "A shark", correct: false },
      { text: "A storm with strong wind and waves", correct: true },
      { text: "A pirate", correct: false },
      { text: "A fire", correct: false }
    ],
    image: './static/images/stories-of-jesus/jesus-disciples-boat.jpeg',
  },
  {
    question: "Who commanded the wind and the waves to be still?",
    answers: [
      { text: "Jesus", correct: true },
      { text: "Peter", correct: false },
      { text: "James", correct: false },
      { text: "John the Baptist", correct: false }
    ],
    image: './static/images/stories-of-jesus/jesus-rebukes-storm.jpeg',
  },
  {
    question: `When Jesus was going to Jerusalem and some people wanted Jesus to bless their children, what did Jesus say when
    the disciples said not to bother Jesus?`,
    answers: [
      { text: "They should come back tomorrow", correct: false },
      { text: "The disciples should go bless the children", correct: false },
      { text: "The disciples should let the children come to Him", correct: true },
      { text: "The parents should take their children home and feed them", correct: false },
    ],
    image: './static/images/stories-of-jesus/jesus-holding-child.jpeg',
  },
]

function getSiblings(node) {
  return [...node.parentElement.children].filter(child => child !== node)
}

function getImageFromQuestion(node) {
   return node.parentElement.parentElement.querySelector('img')
}

const questionsDiv = document.getElementById('questions')
const totalGuessesEl = document.getElementById('total-guesses')
const totalCorrectEl = document.getElementById('total-correct')

questions.forEach((question, index) => {
  const questionDiv = document.createElement('div')
  const questionP = document.createElement('p')
  questionP.classList.add( 'text-yellow-100', 'md:text-xl', 'font-bold', 'text-center', 'pt-4', 'md:pt-8')
  questionP.innerText = `${index + 1}. ${question.question}`
  questionDiv.appendChild(questionP)
  const answersDiv = document.createElement('div')
  answersDiv.classList.add('flex', 'flex-col', 'md:flex-row', 'justify-center', 'items-center')
  question.answers.forEach((answer) => {
    const answerButton = document.createElement('button')
    answerButton.innerText = answer.text
    answerButton.classList.add('bg-gray-900', 'text-white', 'p-2', 'm-2', 'rounded', 'hover:bg-gray-800')
    answerButton.addEventListener('click', () => {
      answerButton.classList.remove('hover:bg-gray-800')
      answerButton.disabled = true
      totalGuessesEl.innerText = parseInt(totalGuessesEl.innerText) + 1
      setTimeout(() => {
        answerButton.classList.add('cursor-not-allowed')
      }, 500)

      if (answer.correct) {
        answerButton.classList.add('bg-green-500')
        totalCorrectEl.innerText = parseInt(totalCorrectEl.innerText) + 1

        const siblings = getSiblings(answerButton)

        Array.from(siblings).forEach(sibling => {
          sibling.classList.add('bg-red-500', 'line-through')
          sibling.classList.remove('hover:bg-gray-800')
          sibling.disabled = true
        })

        if (question.image) {
          const imageEl = getImageFromQuestion(answerButton)
          imageEl.classList.remove('hidden')
        }

      } else {
        answerButton.classList.add('bg-red-500', 'line-through')
      }
    })
    answersDiv.appendChild(answerButton)
  })
  questionDiv.appendChild(answersDiv)
  if (question.image) {
    const imageEl = document.createElement('img')
    imageEl.src = question.image
    imageEl.alt= 'game piece'
    imageEl.classList.add('w-36', 'mx-auto', 'mt-4', 'rounded', 'hidden', 'md:w-96')
    questionDiv.appendChild(imageEl)
  }
  questionsDiv.appendChild(questionDiv)
})

const currentYearSpan = document.getElementById('current-year')
currentYearSpan.textContent = new Date().getFullYear()

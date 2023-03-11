const questions = [
  {
    question: "When Jesus and His disciples were in a boat on the Sea of Galilee, what made the disciples afraid?",
    answers: [
      { text: "a shark", correct: false },
      { text: "a storm with strong winds and waves", correct: true },
      { text: "a pirate", correct: false },
      { text: "a fire", correct: false }
    ],
    image: './static/images/stories-of-jesus/jesus-disciples-boat.jpeg',
    referenceText: 'Luke 8:22-25',
    referenceUrl: 'https://www.churchofjesuschrist.org/study/scriptures/nt/luke/8?lang=eng&id=22-25#p22'
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
    referenceText: 'Luke 8:22-25',
    referenceUrl: 'https://www.churchofjesuschrist.org/study/scriptures/nt/luke/8?lang=eng&id=22-25#p22'
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
    referenceText: 'Mark 10:13-16',
    referenceUrl: 'https://www.churchofjesuschrist.org/study/scriptures/nt/mark/10?lang=eng&id=13-16#p13'
  },
  {
    question: `When Jesus was born, who came and told the shepherds about Jesus?`,
    answers: [
      { text: "Joseph", correct: false },
      { text: "An angel", correct: true },
      { text: "Mary", correct: false },
      { text: "The wise men", correct: false },
    ],
    image: './static/images/stories-of-jesus/angel-with-shepherds.jpeg',
    referenceText: 'Luke 2:8-11',
    referenceUrl: 'https://www.churchofjesuschrist.org/study/scriptures/nt/luke/2?lang=eng&id=8-11#p8'
  },
  {
    question: `Fill in the blank: As Jesus grew, He "increased in ______ and in stature, and in favor with God and man."`,
    answers: [
      { text: "words", correct: false },
      { text: "songs", correct: false },
      { text: "stories", correct: false },
      { text: "wisdom", correct: true },
    ],
    image: './static/images/stories-of-jesus/jesus-boy-scriptures.png',
    referenceText: 'Luke 2:52',
    referenceUrl: 'https://www.churchofjesuschrist.org/study/scriptures/nt/luke/2?lang=eng&id=52#p52'
  },
  {
    question: `When Jesus was 12, he went to Jerusalem with Mary and Joseph. When Mary and Joseph left, they realized Jesus was not with them. Where did they find Jesus?`,
    answers: [
      { text: "at a garden", correct: false },
      { text: "at an inn", correct: false },
      { text: "at the temple", correct: true },
      { text: "at a store", correct: false },
    ],
    image: './static/images/stories-of-jesus/jesus-boy-at-temple.jpeg',
    referenceText: 'Luke 2:46',
    referenceUrl: 'https://www.churchofjesuschrist.org/study/scriptures/nt/luke/2?lang=eng&id=46-47#p46'
  },
  {
    question: `After Jesus was baptized by John the Baptist, which animal came to show that the Holy Ghost was there?`,
    answers: [
      { text: "a dove", correct: true },
      { text: "a deer", correct: false },
      { text: "a dog", correct: false },
      { text: "a dragonfly", correct: false },
    ],
    image: './static/images/stories-of-jesus/jesus-baptism.jpeg',
    referenceText: 'Matthew 3:16',
    referenceUrl: 'https://www.churchofjesuschrist.org/study/scriptures/nt/matt/3?lang=eng&id=16#p16'
  },
  {
    question: `When Jesus was teaching a large crowd, what food did he bless and break into pieces, that ended up being more than enough food for everyone?`,
    answers: [
      { text: "figs and grapes", correct: false },
      { text: "loaves of bread and grapes", correct: false },
      { text: "honeycomb and fish", correct: false },
      { text: "loaves of bread and fish", correct: true },
    ],
    image: './static/images/stories-of-jesus/loaves-and-fishes.jpeg',
    referenceText: 'Matthew 14:13-21',
    referenceUrl: 'https://www.churchofjesuschrist.org/study/scriptures/nt/matt/14?lang=eng&id=13-21#p13'
  },
  {
    question: `Who in Jairus's family did Jesus raise from the dead?`,
    answers: [
      { text: "his mother", correct: false },
      { text: "his daughter", correct: true },
      { text: "his grandma", correct: false },
      { text: "his aunt", correct: false },
    ],
    image: './static/images/stories-of-jesus/jesus-jairus-daughter.jpeg',
    referenceText: 'Mark 5:22-43',
    referenceUrl: 'https://www.churchofjesuschrist.org/study/scriptures/nt/mark/5?lang=eng&id=22-43#p22'
  },
]

function getSiblings(node) {
  return [...node.parentElement.children].filter(child => child !== node)
}

function getImageFromQuestion(node) {
   return node.parentElement.parentElement.querySelector('img')
}

function getReferenceLinkFromQuestion(node) {
  return node.parentElement.parentElement.querySelector('a')
}

const questionsDiv = document.getElementById('questions')
const totalGuessesEl = document.getElementById('total-guesses')
const totalCorrectEl = document.getElementById('total-correct')

questions.forEach((question, index) => {
  const questionDiv = document.createElement('div')

  // Question text
  const questionP = document.createElement('p')
  questionP.classList.add( 'text-yellow-100', 'md:text-xl', 'font-bold', 'text-center', 'pt-4', 'md:pt-8')
  questionP.innerText = `${index + 1}. ${question.question}`
  questionDiv.appendChild(questionP)

  // Answers container
  const answersDiv = document.createElement('div')
  answersDiv.classList.add('flex', 'flex-col', 'md:flex-row', 'justify-center', 'items-center')

  // Answer buttons
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

        if (question.referenceText) {
          const referenceEl = getReferenceLinkFromQuestion(answerButton)
          referenceEl.classList.remove('hidden')
        }

      } else {
        answerButton.classList.add('bg-red-500', 'line-through')
      }
    })
    answersDiv.appendChild(answerButton)
  })
  questionDiv.appendChild(answersDiv)

  // Images
  if (question.image) {
    const imageEl = document.createElement('img')
    imageEl.src = question.image
    imageEl.alt= 'game piece'
    imageEl.classList.add('w-36', 'mx-auto', 'mt-4', 'rounded', 'hidden', 'md:w-96')
    questionDiv.appendChild(imageEl)
  }

  // Reference
  if (question.referenceText) {
    const referenceLink = document.createElement('a')
    referenceLink.href = question.referenceUrl
    referenceLink.textContent = question.referenceText
    referenceLink.target = '_blank'
    referenceLink.classList.add('hidden', 'text-white', 'block', 'text-center', 'mt-4', 'text-sm', 'hover:text-yellow-100')
    questionDiv.appendChild(referenceLink)
  }

  questionsDiv.appendChild(questionDiv)


})

const currentYearSpan = document.getElementById('current-year')
currentYearSpan.textContent = new Date().getFullYear()

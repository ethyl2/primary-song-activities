const messageEl = document.getElementById('message')
const imgEl = document.getElementById('current-img')

// Create the alphabet grid
const alpha = Array.from(Array(26)).map((e, i) => i + 65)
const alphabet = alpha.map((x) => String.fromCharCode(x))
const alphabetContainerEl = document.getElementById('alphabet-container')
alphabet.forEach(letter => {
    const letterEl = document.createElement('button')
    letterEl.textContent = letter
    letterEl.classList.add('border-2', 'rounded-xl', 'px-1', 'py-2', 'hover:bg-gray-800')
    letterEl.setAttribute('data-letter', letter)
    letterEl.addEventListener('click', handleClick)
    alphabetContainerEl.append(letterEl)
})

// Create the rainbow element
const rainbowEl = document.getElementById('rainbow')
const colors = ['#002E96', '#80198C', '#BA0072', '#DB2950', '#E55D2C', '#DB8D00', '#BFB800']
colors.forEach(color => {
    const colorEl = document.createElement('div')
    colorEl.classList.add('w-10', 'h-10', 'md:w-20', 'md:h-20', 'rainbow-color')
    colorEl.style.backgroundColor = color
    rainbowEl.append(colorEl)
})

const words = [
    // Verse 1: Adam
    {solution: 'Adam', imgUrl: 'adam-served-the-lord.jpeg'},
    {solution: 'Eden', imgUrl: 'eden.jpeg'},
    {solution: 'descendants', imgUrl: 'adam-served-the-lord.jpeg'},
    {solution: 'served the Lord', imgUrl: 'adam-served-the-lord.jpeg'},
    {solution: 'following his ways', imgUrl: 'adam-served-the-lord.jpeg'},
    {solution: 'he helped things to grow', imgUrl: 'eden.jpeg'},
    {solution: 'latter days', imgUrl: 'adam-served-the-lord.jpeg'},

    // Verse 2: Enoch
    {solution: 'Enoch', imgUrl: 'enoch-follow-the-prophet.jpeg'},
    {solution: 'righteous', imgUrl: 'enoch-live-with-him.jpeg'},
    {solution: 'live with him', imgUrl: 'enoch-live-with-him.jpeg'},

    // Verse 3: Noah
    {solution: 'Noah', imgUrl: 'noah-repentance.jpeg'},
    {solution: 'nobody heard', imgUrl: 'noah-repentance.jpeg'},
    {solution: 'repentance', imgUrl: 'noah-repentance.jpeg'},
    {solution: 'rain', imgUrl: 'noah-ark.jpeg'},
    {solution:  'preach the word', imgUrl: 'noah-repentance.jpeg'},

    // Verse 4: Abraham
    {solution: 'Abraham', imgUrl: 'abraham-and-sarah.jpeg'},
    {solution: 'Isaac', imgUrl: 'isaac.jpeg'},
    {solution: 'chosen one', imgUrl: 'isaac-chosen-one.jpeg'},
    {solution: 'Abraham the prophet', imgUrl: 'abraham-and-sarah.jpeg'},
    {solution: 'twelve tribes', imgUrl: 'jacobs-sons.jpeg'},
    {solution: 'the Bible tells', imgUrl: 'jacobs-sons.jpeg'},
    {solution: 'the Lord sent Isaac', imgUrl: 'isaac-chosen-one.jpeg'},
    {solution: 'Jacob', imgUrl: 'jacob.jpeg'},
    {solution: 'Israel', imgUrl: 'israel.jpeg'},
    {solution: 'Bible', imgUrl: 'israel.jpeg'},
    {solution: 'chosen', imgUrl: 'isaac-chosen-one.jpeg'},

    // Verse 5: Moses
    {solution: 'Moses', imgUrl: 'moses-commandments.jpeg'},
    {solution: 'sent to Israel', imgUrl: 'moses-led.jpeg'},
    {solution: 'promised land', imgUrl: 'moses-part-water.jpeg'},
    {solution: 'wilderness', imgUrl: 'moses-wilderness.jpeg'},
    {solution: 'forty years', imgUrl: 'moses-wilderness2.jpeg'},


    // Verse 6: Samuel
    {solution: 'Samuel', imgUrl: 'samuel-the-prophet.jpeg'},
    {solution: 'Hannah', imgUrl: 'hannah.jpeg'},
    {solution: 'Hannah promised', imgUrl: 'hannah-promised.jpeg'},
    {solution: 'joy', imgUrl: 'hannah-promised.jpeg'},
    {solution: 'serve with joy', imgUrl: 'hannah-promised.jpeg'},
    {solution: 'Here I am', imgUrl: 'samuel-here-i-am.jpeg'},
    {solution: 'Samuel heard', imgUrl: 'samuel-here-i-am.jpeg'},
    {solution: 'tabernacle', imgUrl: 'samuel-here-i-am.jpeg'},
    {solution: 'called by God', imgUrl: 'samuel-here-i-am.jpeg'},

    // Verse 7: Jonah
    {solution: 'Jonah', imgUrl: 'jonah-the-prophet.jpeg'},
    {solution: 'whale', imgUrl: 'jonah-and-whale.jpeg'},
    {solution: 'really try', imgUrl: 'jonah-repentant.jpeg'},
    {solution: 'listen and obey', imgUrl: 'jonah-out-of-whale.jpeg'},

    // Verse 8: Daniel
    {solution: 'Daniel', imgUrl: 'daniel-refused-to-sin.jpeg'},
    {solution: 'king threw Daniel', imgUrl: 'daniel-king-threw.jpeg'},
    {solution: 'calmed the lions', imgUrl: 'daniel-safe.jpeg'},
    {solution: 'king soon saw', imgUrl: 'daniel-king-soon-saw.jpeg'},
    {solution: 'power was great', imgUrl: 'daniel-king-soon-saw.jpeg'},
    {solution: 'lions', imgUrl: 'daniel-safe.jpeg'},
    {solution: 'refused to sin', imgUrl: 'daniel-refused-to-sin.jpeg'},
    {solution: 'angels', imgUrl: 'daniel-safe.jpeg'},

    // Verse 9: Today
    {solution: 'get direction', imgUrl: 'president-nelson.jpeg'},
    {solution: 'watch the news', imgUrl: 'president-nelson.jpeg'},

    // Chorus
    {solution: 'Follow the prophet', imgUrl: 'president-nelson.jpeg'},
    {solution: 'He knows the way', imgUrl: 'president-nelson.jpeg'},
    {solution: 'heed the prophets', imgUrl: 'president-nelson.jpeg'},
]
const wordContainerEl = document.getElementById('word-container')
let newWord = ''
let letters = []
let errorsCount = 0

function getWord() {
    // Clear the message
    messageEl.textContent = ''

    // Reset the alphabet grid
    alphabetContainerEl.classList.remove('opacity-0')
    const alphabetButtons = document.querySelector('#alphabet-container').childNodes
    alphabetButtons.forEach(button => {
        button.classList.remove('bg-green-600', 'bg-red-600', 'cursor-not-allowed')
        button.disabled = false
    })

    // Reset the rainbow
    errorsCount = 0
    const colorEls = rainbowEl.childNodes
    colorEls.forEach(colorEl => {
        colorEl.classList.remove('opacity-0')
    })

    // Remove the old word/phrase
    const letterHolders = document.querySelectorAll('.letter-holder')
    letterHolders.forEach(letterHolder => {
        letterHolder.remove()
    })

    // Get a new word/phrase
    newWord = words[Math.floor(Math.random() * words.length)]
    letters = newWord.solution.toUpperCase().split('')
    imgEl.src = `./images/prophet/which-prophet.png`
    imgEl.alt = 'guess'
    letters.forEach(letter => {
        const letterEl = document.createElement('span')

        if (letter !== ' ') {
        letterEl.textContent = '__'
        } else {
            letterEl.classList.add('w-4', 'h-4')
        }
        letterEl.classList.add('px-2', 'letter-holder', 'md:text-xl')
        letterEl.setAttribute('data-letter', letter)
        wordContainerEl.append(letterEl)
    })

}

// Handle alphabet grid click
function handleClick(e) {
    const letterButton = e.target
    letterButton.disabled = true
    letterButton.classList.add('cursor-not-allowed')
    const letter = letterButton.getAttribute('data-letter')
    const indices = getAllIndices(letters, letter)
    if (indices.length > 0) {
        letterButton.classList.add('bg-green-600')
        const letterHolders = document.querySelectorAll('.letter-holder')
        indices.forEach(index => {
            letterHolders[index].textContent = letter
        })
        // Show the success message if all the letters are guessed correctly
        if (Array.from(letterHolders).filter(element => element.textContent === '__').length === 0) {
            messageEl.textContent = "You figured it out! Congratulations!"
            imgEl.src = `./images/prophet/${newWord.imgUrl}`
            imgEl.alt = newWord.solution
        }
    } else {
        letterButton.classList.add('bg-red-600')
        if (errorsCount < 7) {
            Array.from(document.querySelectorAll('.rainbow-color'))[errorsCount].classList.add('opacity-0')
            errorsCount++
        }
    }
}

function getAllIndices(arr, val) {
    let indexes = [], i
    for(i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            indexes.push(i)
        }
    }
    return indexes;
}
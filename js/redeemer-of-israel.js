const freeSpaceMessageEl = document.getElementById('free-space-message')

const wordChoices = [
    'redeemer', 'Israel', 'delight', 'blessing', 'shadow', 'pillar', 'king', 'deliverer', 'sheep', 'Zion', 'love', 'valley', 'wilderness', 'wander', 'strangers', 'cry', 'desert', 'foes', 'free', 'children',
    'tidings', 'tokens', 'kingdom', 'fear not', 'redemption', 'Savior', 'comfort', 'holy place', 'hope', 'heart', 'angels', 'eternity', 'praise'
]

// Add click handler for reset button
const resetButton = document.getElementById('reset-button')
resetButton.addEventListener('click', () => {
    const audioCheckbox = document.getElementById('audio-permission')
    if (audioCheckbox.checked) {
    audio = new Audio(`./audio/reset.wav`)
    audio.play()
    }
    setTimeout(()=> {
    window.location.reload()
    }, 400)
})

// Create the arrays of winning diagonal coordinates
const topLeftDiagonalCoords = []
for (let i = 0; i<5; i++) {
    let coords = []
    coords.push(i)
    coords.push(i)
    topLeftDiagonalCoords.push(coords)
}

const topRightDiagonalCoords = []
let columnIndex = 4
for (let i = 0; i<5; i++) {
    let coords = []
    coords.push(columnIndex)
    coords.push(i)
    columnIndex--
    topRightDiagonalCoords.push(coords)
}

// https://stackoverflow.com/questions/17891173/how-to-efficiently-randomly-select-array-item-without-repeats
function randomNoRepeats(array) {
    let copy = array.slice(0);
    return function () {
        if (copy.length < 1) { copy = array.slice(0); }
        const index = Math.floor(Math.random() * copy.length);
        const item = copy[index];
        copy.splice(index, 1);
        return item;
    };
    }

const getWordForGrid = randomNoRepeats(wordChoices, false)
const getCurrentWord = randomNoRepeats(wordChoices, true)
let currentWord = ''
const wordButton = document.getElementById('word-button')
const currentWordEl = document.getElementById('current-word')
const bingoBoard = document.getElementById('bingo')
const successMessageEl = document.getElementById('success-message')
let leftDiagonalCount = 0
let rightDiagonalCount = 0
let audio = null

// Set up board
for (let i=0; i<5; i++) {
    const row = document.createElement('div')
    row.classList.add('grid', 'grid-cols-5', 'divide-x-2', 'border-b-2', 'border-black' , 'divide-black', 'border-r-2', 'bingo-row')
    for (let j = 0; j < 5; j++) {
    const square = document.createElement('div')
    square.dataset.row = i
    square.dataset.column = j
    square.classList.add('h-14', 'w-14', 'flex', 'items-center', 'text-center', 'justify-center', 'sm:h-32', 'sm:w-32', 'cursor-pointer', 'overflow-auto')

    if (i === 2 && j === 2) {
        square.textContent = 'FREE'
        square.classList.add('bg-yellow-300', 'hover:bg-yellow-200', 'square')
        square.addEventListener('click', () => {
        square.classList.toggle('bg-yellow-300')
        square.classList.toggle('hover:bg-yellow-200')
        square.classList.toggle('hover:bg-red-600')
        square.classList.toggle('bg-red-700')
        square.classList.toggle('text-white')
        const audioCheckbox = document.getElementById('audio-permission')
        if(audioCheckbox.checked) {
            audio = new Audio(`./audio/correct.wav`)
            audio.play()
        }
        })
    } else {
        const wordForSquare = getWordForGrid()
        square.textContent = wordForSquare
        square.classList.add('hover:bg-gray-100', 'square', 'cursor-not-allowed')
        square.addEventListener('click', () => {
        if (currentWord === wordForSquare) {
            square.classList.toggle('bg-red-700')
            square.classList.toggle('hover:bg-red-600')
            square.classList.toggle('text-white')
            const audioCheckbox = document.getElementById('audio-permission')
            if (audioCheckbox.checked) {
            audio = new Audio(`./audio/correct.wav`)
            audio.play()
            }
        }
    })
    }
    row.append(square)
    }
    bingoBoard.append(row)
    shouldReset = true
}

const squareEls = document.getElementsByClassName('square')
const rowEls = document.getElementsByClassName('bingo-row')

wordButton.addEventListener('click', () => {
    const audioCheckbox = document.getElementById('audio-permission')
    if (audioCheckbox.checked) {
    audio = new Audio(`./audio/tada.wav`)
    audio.play()
    }
    const newCurrentWord = getCurrentWord()
    currentWordEl.textContent = newCurrentWord
    currentWordEl.classList.remove('text-transparent')
    currentWordEl.classList.add('text-green-600')
    currentWord = newCurrentWord
    Array.from(squareEls).forEach(el => {
    if (el.textContent === currentWord) {
        el.classList.remove('cursor-not-allowed')
        el.classList.add('cursor-pointer')
    } else {
        el.classList.remove('cursor-pointer')
        el.classList.add('cursor-not-allowed')
    }
    })
})

Array.from(squareEls).forEach(squareEl => {
    squareEl.addEventListener('click', (e) => {
    const rowClicked = parseInt(e.target.dataset.row)
    const colClicked = parseInt(e.target.dataset.column)
    const coords = []

    coords.push(colClicked)
    coords.push(rowClicked)
    topLeftDiagonalCoords.forEach(coordSet => {
        if ( arrayEquals(coordSet, coords)) {
        leftDiagonalCount++
        }
    })
    topRightDiagonalCoords.forEach(coordSet => {
        if ( arrayEquals(coordSet, coords)) {
        rightDiagonalCount++
        }
    })
    // Remove unneeded free space message once free space is clicked and disable future interactions with free space
    if ( arrayEquals(coords,[2, 2])) {
        e.target.classList.remove('cursor-pointer')
        e.target.classList.add('pointer-events-none', 'cursor-not-allowed')
        freeSpaceMessageEl.classList.add('opacity-0')
    }


    let columns = [0, 0, 0, 0, 0]
    Array.from(rowEls).forEach((rowEl, rowIndex) => {
        const squaresInRow = rowEl.getElementsByTagName('div')
        let redSquareCount = 0
        Array.from(squaresInRow).forEach((square, index) => {

        if(square.classList.contains('bg-red-700')) {
            redSquareCount++
            columns[index]++
        }
        })
        if (redSquareCount === 5 || columns.includes(5) || rightDiagonalCount === 5 || leftDiagonalCount === 5) {
        successMessageEl.classList.remove('hidden')
        const audioCheckbox = document.getElementById('audio-permission')
        if (audioCheckbox.checked) {
            setTimeout(() => {
            audio = new Audio(`./audio/win.wav`)
            audio.play()
            }, 400)
        }
        }
    })
    })
})


// Handle accessibility
var enableAnimations = false;
var reduceMotionQuery = matchMedia("(prefers-reduced-motion)");

// Handle animation accessibility preferences
function setAccessibilityState() {
    if (reduceMotionQuery.matches) {
    enableAnimations = false;
    } else {
    enableAnimations = true;
    }
}
setAccessibilityState();

reduceMotionQuery.addListener(setAccessibilityState);

function setup() {
    if (!enableAnimations) {
    // Add any animations here
    }
}
setup();

function arrayEquals(a, b) {
    return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}
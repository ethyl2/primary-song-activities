const showButton = document.getElementById('show-text')
const clipboardBox = document.getElementById('clipboard')
const showSelectedButton = document.getElementById('show-selection')
const selectionBox = document.getElementById('selection-clipboard')
const selectedClassesBox = document.getElementById('selected-classes-box')
const copiedClassesBox = document.getElementById('copied-classes-box')
showButton.addEventListener('click', () => {
    clipboardBox.removeAttribute('class')
    const newClasses = getTextClasses()
    clipboardBox.classList.add(...newClasses)
    navigator.clipboard.readText().then(clipText => {
        clipboardBox.textContent = clipText
    })
    removeAllChildNodes(copiedClassesBox)
    const caption = document.createElement('p')
    caption.classList.add('text-xs', 'italic')
    caption.textContent = 'Tailwind classes:'
    copiedClassesBox.append(caption)
    newClasses.forEach(newClass => {
        const classPill = document.createElement('p')
        classPill.classList.add('rounded-full', 'px-2', 'h-10', 'border', 'text-white', 'm-1', 'flex', 'items-center', 'text-center', 'justify-center', 'text-xs', 'bg-white', 'bg-opacity-20')
        classPill.textContent = newClass
        copiedClassesBox.append(classPill)
    })
})
showSelectedButton.addEventListener('click', () => {
    selectionBox.removeAttribute('class')
    const newClasses = getTextClasses()
    console.log(newClasses)
    selectionBox.classList.add(...newClasses)
    const selectedText = getSelectionText()
    selectionBox.textContent = selectedText
    removeAllChildNodes(selectedClassesBox)
    const caption = document.createElement('p')
    caption.classList.add('text-xs', 'italic')
    caption.textContent = 'Tailwind classes:'
    selectedClassesBox.append(caption)
    newClasses.forEach(newClass => {
        const classPill = document.createElement('p')
        classPill.classList.add('rounded-full', 'h-10', 'px-2', 'border', 'text-white', 'm-1', 'flex', 'items-center', 'text-center', 'justify-center', 'text-xs', 'bg-white', 'bg-opacity-20')
        classPill.textContent = newClass
        selectedClassesBox.append(classPill)
    })
})
function getSelectionText() {
    let text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

const colors = ['white', 'gray', 'red', 'yellow', 'black', 'green', 'blue', 'indigo', 'purple', 'pink']
const colorLevels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
const fontWeights = ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black']
const fontStyles = ['italic', 'not-italic', 'underline', 'no-underline']
const textTransforms = ['uppercase', 'lowercase', 'capitalize', 'normal-case']
const fontSizes = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl']
const fontFamilies = ['sans', 'serif', 'mono']

function getTextClasses() {
    let textClasses = []
    let color = colors[Math.floor(Math.random() * colors.length)]
    let level = 1000
    if (color !== 'white' && color !== 'black') {
        level = colorLevels[Math.floor(Math.random() * colorLevels.length)]
        color += '-' + level
    }
    textClasses.push('text-' + color)
    if (color === 'white' || level < 500) {
        textClasses.push('bg-black')
    } else {
        textClasses.push('bg-white')
    }
    const weight = fontWeights[Math.floor(Math.random() * fontWeights.length )]
    textClasses.push('font-' + weight)
    const currentStyle = fontStyles[Math.floor(Math.random() * fontStyles.length)]
    textClasses.push(currentStyle)
    const textTransform = textTransforms[Math.floor(Math.random() * textTransforms.length)]
    textClasses.push(textTransform)
    const fontSize = fontSizes[Math.floor(Math.random() * fontSizes.length)]
    textClasses.push('text-' + fontSize)
    const fontFamily = fontFamilies[Math.floor(Math.random() * fontFamilies.length)]
    textClasses.push('font-' + fontFamily)
    return textClasses
}

function removeAllChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}
const centerImgDiv = document.getElementById('center-img')

const items = [
    {
        headerText: 'Click the sun to see what is most beautiful',
        buttonSlug : 'sun.png',
        backgroundSlug: 'sunshine.jpg',
        text: 'Fair is the sunshine,'
    },
    {
        headerText: 'Click the moon to see what is most beautiful',
        buttonSlug : 'moon.png',
        backgroundSlug: 'moonlight.jpg',
        text: 'Fairer the moonlight',
    },
    {
        headerText: 'Click the star to see what is most beautiful',
        buttonSlug : 'star.png',
        backgroundSlug: 'stars.jpg',
        text: 'And all the stars in heav\'n above;',
    },
    {
        headerText: 'Jesus is! Keep clicking',
        buttonSlug : 'jesus-teaching.png',
        backgroundSlug: 'shines-brighter.jpg',
        text: 'Jesus shines brighter,',
        centerImgSlug: 'jesus-shines-brighter.jpeg'
    },
    {
        headerText: 'Jesus is! Keep clicking',
        buttonSlug : 'jesus-resurrected.png',
        backgroundSlug: 'shines-purer.jpg',
        text: 'Jesus shines purer',
        centerImgSlug: 'jesus-shines-purer.jpeg'
    },
    {
        headerText: 'Jesus is! Keep clicking',
        buttonSlug : 'heart-world.png',
        backgroundSlug: 'nebula.jpg',
        text: 'And brings to all the world his love.',
        centerImgSlug: 'world-his-love.jpeg'
    },
    {
        headerText: 'Click the leaf to see what is most beautiful',
        buttonSlug : 'leaf.png',
        backgroundSlug: 'meadows.jpg',
        text: 'Fair are the meadows,',
    },
    {
        headerText: 'Click the tree to see what is most beautiful',
        buttonSlug : 'tree.png',
        backgroundSlug: 'woodlands.jpg',
        text: 'Fairer the woodlands,',
    },
    {
        headerText: 'Click the flower to see what is most beautiful',
        buttonSlug : 'flower.png',
        backgroundSlug: 'flowers.jpg',
        text: 'Robed in the flowers of blooming spring;',
    },
    {
        headerText: 'Jesus is! Keep clicking',
        buttonSlug : 'jesus-easter.png',
        backgroundSlug: 'icebergs.jpg',
        text: 'Jesus is fairer,',
        centerImgSlug: 'resurrected-christ.jpeg'
    },
    {
        headerText: 'Jesus is! Keep clicking',
        buttonSlug : 'jesus-palm-sunday.png',
        backgroundSlug: 'white-sands.jpg',
        text: 'Jesus is purer.',
        centerImgSlug: 'christ-portrait.jpeg'
    },
    {
        headerText: 'Jesus is! Keep clicking',
        buttonSlug : 'jesus-gethsemane.png',
        backgroundSlug: 'garden-tomb.jpeg',
        text: 'He makes the sorrowing spirit sing.',
        centerImgSlug: 'jesus-heals.jpeg'
    },
    {
        headerText: 'Jesus is! Keep clicking',
        buttonSlug : 'jesus-creator.png',
        backgroundSlug: 'grain.jpg',
        text: 'Beautiful Savior!',
        centerImgSlug: 'jesus-with-child.jpeg'
    },
    {
        headerText: 'Jesus is! Keep clicking',
        buttonSlug : 'earth.png',
        backgroundSlug: 'flags.jpg',
        text: 'Lord of the nations!',
        centerImgSlug: 'judgement.jpeg'
    },
    {
        headerText: 'Jesus is! Keep clicking',
        buttonSlug : 'jesus-and-the-father.png',
        backgroundSlug: 'nativity.jpg',
        text: 'Son of God and Son of Man!',
        centerImgSlug: 'nativity.jpeg'
    },
    {
        headerText: 'Jesus is! Keep clicking',
        buttonSlug : 'temple.png',
        backgroundSlug: 'sunbeams.jpg',
        text: 'Thee will I honor, praise, and give glory,',
        centerImgSlug: 'jesus-and-bofm-children.jpeg'
    },
    {
        headerText: 'Jesus is! Keep clicking',
        buttonSlug : 'firework.png',
        backgroundSlug: 'fireworks.jpg',
        text: 'Give praise and glory everymore!,',
        centerImgSlug: 'jesus-creator-barrett.jpg',
    },
    {
        headerText: 'Jesus is! Keep clicking',
        buttonSlug : 'infinity.png',
        backgroundSlug: 'purple-flowers.jpg',
        text: 'Evermore!',
        centerImgSlug: 'gentle-healer.jpg'
    },

]
let currentIndex = 0

const sunButton = document.getElementById('sun')
const mainEl = document.getElementsByTagName('main')[0]
const headerInstructionEl = document.getElementById('header-instruction')
const lyricEl = document.getElementById('lyric')


sunButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length
    mainEl.style.backgroundImage = `url('./images/beautiful-savior/${items[currentIndex].backgroundSlug}')`
    sunButton.style.backgroundImage = `url('./images/beautiful-savior/${items[currentIndex].buttonSlug}')`
    headerInstructionEl.textContent = items[currentIndex].headerText
    lyricEl.textContent = items[currentIndex].text
    if (items[currentIndex].centerImgSlug) {
        centerImgDiv.style.backgroundImage =  `url('./images/beautiful-savior/${items[currentIndex].centerImgSlug}')`
        centerImgDiv.classList.add('border-4', 'shadow',  'border-yellow-900')
    } else {
        centerImgDiv.classList.remove('border-4', 'shadow',  'border-yellow-900')
        centerImgDiv.style.backgroundImage = null
    }

})
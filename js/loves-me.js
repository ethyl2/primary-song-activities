let audio
const buttonContainer = document.getElementById('button-container')
const boxClasses = ['flex', 'flex-col', 'items-center', 'justify-center', 'space-y-2', 'p-4', 'rounded', 'border-4', 'hover:border-gray-400', 'shadow', 'w-3/4', 'md:w-1/3']
const imgClasses = ['object-center', 'h-32', 'w-32', 'rounded', 'md:h-64', 'md:w-64']
const items = [
  {
    id: 'bird',
    audioFile: 'bird-song.wav',
    text: 'Whenever I hear the song of a bird',
    imgUrl: 'bird.png',
    bgClass: 'yellow-100',
    audioSrc: 'https://freesound.org/people/InspectorJ/sounds/456440/'
  },
  {
    id: 'sky',
    audioFile: 'wind-chimes.wav',
    text: 'Or look at the blue, blue sky,',
    imgUrl: 'sky.png',
    bgClass: 'blue-100',
    audioSrc: 'https://freesound.org/people/InspectorJ/sounds/353194/'
  },
  {
    id: 'rain',
    audioFile: 'rain-drips.mp3',
    text: 'Whenever I feel the rain on my face',
    imgUrl: 'rain.png',
    bgClass: 'indigo-100',
    audioSrc: 'https://freesound.org/people/TheGloomWorker/sounds/476202/'
  },
  {
    id: 'wind',
    audioFile: 'wind.mp3',
    text: 'Or the wind as it rushes by,',
    imgUrl: 'wind.png',
    bgClass: 'green-100',
    audioSrc: 'https://freesound.org/people/Hephaestus/sounds/250138/'
  },
  {
    id: 'rose',
    audioFile: 'ding.wav',
    text: 'Whenever I touch a velvet rose',
    imgUrl: 'rose.png',
    bgClass: 'pink-100',
    audioSrc: 'https://freesound.org/people/InspectorJ/sounds/411089/'
  },
  {
    id: 'lilac-tree',
    audioFile: 'walking.wav',
    text: 'Or walk by our lilac tree,',
    imgUrl: 'lilacs.png',
    bgClass: 'purple-100',
    audioSrc: 'https://freesound.org/people/tec_studio/sounds/98493/'
  },
  {
    id: 'beautiful-world',
    audioFile: 'beautiful-guitar.wav',
    text: "I'm glad that I live in this beautiful world",
    imgUrl: 'earth.png',
    bgClass: 'green-100',
    audioSrc: 'https://freesound.org/people/fastdash99/sounds/484749/'
  },
  {
    id: 'created',
    audioFile: 'angelic-choir.wav',
    text: "Heav'nly Father created for me.",
    imgUrl: 'connected.png',
    bgClass: 'red-100',
    audioSrc: 'https://freesound.org/people/esistnichtsoernst/sounds/434700/'
  },
  {
    id: 'eyes',
    audioFile: 'eye-blink.wav',
    text: "He gave me my eyes that I might see",
    imgUrl: 'eyes.png',
    bgClass: 'blue-100',
    audioSrc: 'https://freesound.org/people/markboylan10/sounds/189586/'
  },
  {
    id: 'butterflies',
    audioFile: 'butterflies.wav',
    text: "The color of butterfly wings.",
    imgUrl: 'butterflies.png',
    bgClass: 'pink-100',
    audioSrc: 'https://freesound.org/people/olver/sounds/417862/'
  },
  {
    id: 'ears',
    audioFile: 'ocean-waves.wav',
    text: "He gave me my ears that I might hear",
    imgUrl: 'ears.png',
    bgClass: 'yellow-100',
    audioSrc: 'https://freesound.org/people/darren1979/sounds/58416/'
  },
  {
    id: 'magic',
    audioFile: 'distant-fireworks.wav',
    text: "The magical sound of things.",
    imgUrl: 'fireworks.png',
    bgClass: 'pink-100',
    audioSrc: 'https://freesound.org/people/ivolipa/sounds/552164/'
  },
  {
    id: 'life',
    audioFile: 'heart-beat.wav',
    text: "He gave me my life, my mind, my heart:",
    imgUrl: 'life.png',
    bgClass: 'yellow-100',
    audioSrc: 'https://freesound.org/people/newlocknew/sounds/612642/'
  },
  {
    id: 'thank',
    audioFile: 'amazing-grace.wav',
    text: "I thank him rev'rently",
    imgUrl: 'thank.png',
    bgClass: 'pink-100',
    audioSrc: 'https://freesound.org/people/mrmccormack/sounds/180384/'
  },
  {
    id: 'creations',
    audioFile: 'rooster.wav',
    text: "For all his creations, of which I'm a part.",
    imgUrl: 'creations.png',
    bgClass: 'green-100',
    audioSrc: 'https://freesound.org/people/dobroide/sounds/39923/'
  },
  {
    id: 'creations',
    audioFile: 'harp.wav',
    text: "Yes, I know Heav'nly Father loves me.",
    imgUrl: 'love.png',
    bgClass: 'purple-100',
    audioSrc: 'https://freesound.org/people/adriann/sounds/149187/'
  },
]

items.forEach(item => {
  const box = document.createElement('div')
  box.classList.add(...boxClasses)
  box.classList.add(item.bgClass ? `bg-${item.bgClass}` : 'bg-purple-100')
  box.classList.add(item.bgClass ? `border-${item.bgClass}` : 'border-purple-100')
  box.setAttribute('data-item', item.audioFile)
  const innerImg = document.createElement('img')
  innerImg.src = `./images/loves-me/${item.imgUrl}`
  innerImg.alt = item.id
  innerImg.classList.add(...imgClasses)
  innerImg.setAttribute('data-item', item.audioFile)
  box.append(innerImg)
  const innerP = document.createElement('p')
  innerP.textContent = item.text
  box.append(innerP)
  box.addEventListener('click', handleClick)
  buttonContainer.append(box)
})

function handleClick(event) {
  const audioFile = event.target.getAttribute('data-item')
  audio = new Audio(`./audio/${audioFile}`)
  audio.play()
}

const footer = document.getElementsByTagName('footer')[0]
const audioSrcSection = document.createElement('div')
audioSrcSection.classList.add('pb-2', 'grid', 'grid-cols-8', 'md:flex')
items.forEach(item => {
  const audioLink = document.createElement('a')
  audioLink.href = item.audioSrc
  audioLink.target = '_blank'
  audioLink.setAttribute('rel', 'nofollow noopener noreferrer')
  audioLink.textContent = '🎵'
  audioLink.classList.add('p-1', 'rounded', 'hover:bg-white')
  audioLink.setAttribute('title', `source for ${item.audioFile}`)
  audioSrcSection.append(audioLink)
})
footer.prepend(audioSrcSection)

const currentYearSpan = document.getElementById('current-year')
currentYearSpan.textContent = new Date().getFullYear()

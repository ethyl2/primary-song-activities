const actions = [
    { name: 'clap',
        image: 'clap.jpg',
    },
    { name: 'march',
        image: 'march.jpg',
    },
    { name: 'air guitar',
        image: 'guitar.jpg',
    },
    { name: 'roll your hands',
        image: 'roll-hands-dance.jpg',
    },
    { name: 'jump',
        image: 'jumping.jpg',
    },
    { name: 'spin',
        image: 'spin.jpg',
    },
    { name: 'nod head',
        image: 'nod.jpg',
    },
    { name: 'wiggle all over',
        image: 'wiggle.jpg',
    },
    { name: 'hula dance',
        image: 'hula-dance.jpg',
    },
    { name: 'chicken dance',
        image: 'chicken.jpg',
    },
    { name: 'hop on one foot',
        image: 'hopping.jpg',
    },
    { name: 'be a robot',
        image: 'robot.jpg',
    },
    { name: 'blink',
        image: 'blink.jpg',
    },
    { name: 'wink',
        image: 'wink.jpg',
    },
    { name: 'pat your head',
        image: 'pat-head.jpg',
    },
    { name: 'tiptoe',
        image: 'tiptoe.jpg',
    },
    { name: 'sit down and then stand up',
        image: 'stand-up-sit-down.jpg',
    },
    { name: 'jazz hands',
        image: 'jazz-hands.jpg',
    },
    { name: 'stretch',
        image: 'stretch.jpg',
    },
    { name: 'stick out your tongue',
        image: 'tongue.jpg',
    },
    { name: 'give high fives',
        image: 'high-five.jpg',
    },
    { name: 'jumping jacks',
        image: 'jumping-jacks.jpg',
    },
    { name: 'give fist bumps',
        image: 'fist-bump.jpg',
    },
    { name: 'pretend to eat',
        image: 'eat.jpg',
    },
    { name: 'pretend to sleep',
        image: 'sleep.jpg',
    },
    { name: 'yawn',
        image: 'yawn.jpg',
    },
    { name: 'massage your forehead',
        image: 'forehead.jpg',
    },
    { name: 'stomp your feet',
        image: 'stomp-feet.jpg',
    },
    { name: 'conduct an orchestra',
        image: 'conductor.jpg',
    },
    { name: 'wave a magic wand',
        image: 'wand.jpg',
    },
    { name: 'close your eyes',
        image: 'close-eyes.jpg',
    },
    { name: 'paint an imaginary picture',
        image: 'paint-picture.jpg',
    },
    { name: 'take imaginary photos',
        image: 'take-photo.jpg',
    },
    { name: 'touch your toes',
        image: 'touch-toes.jpg',
    },
    { name: 'pat your belly',
        image: 'belly-rub.jpg',
    },
    { name: 'snap your fingers',
        image: 'snap.jpg',
    },
    { name: 'rub your hands together',
        image: 'rub-hands.jpg',
    },
    { name: 'pretend to be rain',
        image: 'rain.jpg',
    },
    { name: 'twist',
        image: 'twist.jpg',
    },
    { name: 'move your head side to side',
        image: 'head-to-side.jpg',
    },
    { name: 'walk in place',
        image: 'walk.jpg',
    },
    { name: 'play an invisible piano',
        image: 'piano.jpg',
    },
    { name: 'be an inflatable tube man',
        image: 'tube-man.jpg',
    },
    { name: 'wave',
        image: 'wave.jpg',
    },
    { name: 'shrug your shoulders',
        image: 'shoulders.jpg',
    },
    { name: 'play an invisible flute',
        image: 'flute.jpg',
    },
    { name: 'play an invisible violin',
        image: 'violin.jpg',
    },
    { name: 'play an invisible trumpet',
        image: 'trumpet.jpg',
    },
    { name: 'pretend to fly',
        image: 'flying.jpg',
    },
    { name: 'scratch',
        image: 'scratch.jpg',
    },
    { name: 'write in the air',
        image: 'air-writing.jpg',
    },
    { name: 'reach up to the sky',
        image: 'reach-up.jpg',
    },
    { name: 'steer an invisible car',
        image: 'steer-car.jpg',
    },
    { name: 'row an invisible boat',
        image: 'row-boat.jpg',
    },
    { name: 'swing an invisible bat',
        image: 'swing-bat.jpg',
    },
    { name: 'dribble an invisible basketball',
        image: 'dribble.jpg',
    },
    { name: 'pretend to swim',
        image: 'swim.jpg',
    },
    { name: 'pretend to be an elephant',
        image: 'elephant.jpg',
    },
    { name: 'take selfies with an invisible phone',
        image: 'selfie.jpg',
    },
    {
        name: 'butterfly hands flying around',
        image: 'butterfly-hands.png',
    },
    {
        name: 'backbend',
        image: 'backbend.jpg',
    },
    {
        name: 'yoga tree pose',
        image: 'yoga-tree-pose.jpg',
    },
    {    name: 'bend to the side',
        image: 'side-reach.jpg',
    },
    {    name: 'do the floss',
        image: 'floss.png',
    },
    {    name: 'play an invisible trombone',
        image: 'trombone.jpg',
    },
    {    name: 'play something like a drum',
        image: 'drum.jpg',
    },
    {
      name: 'eensy weensy spider hand motions',
      image: 'eensy-spider.jpg',
    },

]

const actionButton = document.getElementById('action-button')
const currentActionEl = document.getElementById('current-action')
const actionImageEl = document.getElementById('action-image')
actionButton.addEventListener('click', () => {
    actionButton.disabled = true
    actionButton.classList.remove('cursor-default')
    actionButton.classList.add('cursor-not-allowed')
    actionImageEl.style.backgroundImage = null
    currentActionEl.textContent = ''
    const newAction = actions[Math.floor(Math.random() * actions.length)]
    let timeAmount = 0
    for (let i=0; i<newAction.name.length; i++) {
        timeAmount += 50
        test(timeAmount, newAction.name[i])
    }

    setTimeout(() => {
        actionButton.disabled = false
        actionButton.classList.remove('cursor-not-allowed')
        actionButton.classList.add('cursor-default')
        if (newAction.image) {
            actionImageEl.style.backgroundImage = `url(./images/doing/${newAction.image})`
        }
    }, timeAmount)
})

function test(timeAmount, char) {
    setTimeout( () => {
        currentActionEl.textContent += char
       }, timeAmount)
}

const currentYearSpan = document.getElementById('current-year')
currentYearSpan.textContent = new Date().getFullYear()
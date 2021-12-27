const actions = [
    'clap',
    'march',
    'air guitar',
    'roll your arms',
    'jump',
    'spin',
    'nod head', 
    'wiggle all over',
    'hula dance',
    'chicken dance',
    'hop on one foot',
    'be a robot',
    'blink',
    'wink',
    'pat your head',
    'tiptoe',
    'bend over',
    'sit down and then stand up',
    'jazz hands',
    'stretch',
    'stick out your tongue',
    'give high fives',
    'give fist bumps',
    'jumping jacks',
    'pretend to eat',
    'pretend to sleep',
    'yawn',
    'massage your forehead',
    'shrug your shoulders',
    'stomp your feet',
    'slap your thighs',
    'conduct an orchestra',
    'wave a magic wand',
    'close your eyes',
    'paint an imaginary picture',
    'take imaginary photos',
    'touch your toes',
    'pat your belly',
    'snap your fingers',
    'rub your hands together',
    'pretend to be rain',
    'twist',
    'move your head side to side',
    'walk in place',
    'play an invisible piano'
]

const actionButton = document.getElementById('action-button')
const currentActionEl = document.getElementById('current-action')
actionButton.addEventListener('click', () => {
    currentActionEl.textContent = ''
    const newAction = actions[Math.floor(Math.random() * actions.length)]
    let timeAmount = 0
    for (let i=0; i<newAction.length; i++) {
        timeAmount += 50
        test(timeAmount, newAction[i])
    }
})

function test(timeAmount, char) {
    setTimeout( () => {
        currentActionEl.textContent += char
       }, timeAmount)
}
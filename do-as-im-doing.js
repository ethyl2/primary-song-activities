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
    { name: 'roll your arms',
        image: '', 
    },
    { name: 'jump',
        image: 'jumping.jpg', 
    },
    { name: 'spin',
        image: 'spin.jpg', 
    },
    { name: 'nod head',
    image: '', 
},
{ name: 'wiggle all over',
image: '', 
},
{ name: 'hula dance',
image: '', 
},
{ name: 'chicken dance',
image: '', 
},
{ name: 'hop on one foot',
image: 'hopping.jpg', 
},
{ name: 'be a robot',
image: 'robot.jpg', 
},
{ name: 'blink',
image: '', 
},
{ name: 'wink',
image: '', 
},
{ name: 'pat your head',
image: '', 
},
{ name: 'tiptoe',
image: 'tiptoe.jpg', 
},
{ name: 'bend over',
image: '', 
},
{ name: 'sit down and then stand up',
image: '', 
},
{ name: 'jazz hands',
image: '', 
},
{ name: 'stretch',
image: 'stretch.jpg', 
},
{ name: 'stick out your tongue',
image: 'tongue.jpg', 
},
{ name: 'give high fives',
image: '', 
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
{ name: 'message your forehead',
image: '', 
},
{ name: 'stomp your feet',
image: '', 
},
{ name: 'slap your thighs',
image: '', 
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
image: '', 
},
{ name: 'pretend to be rain',
image: 'rain.jpg', 
},
{ name: 'twist',
image: '', 
},
{ name: 'move your head side to side',
image: '', 
},
{ name: 'walk in place',
image: 'walk.jpg', 
},
{ name: 'play an invisible piano',
image: 'piano.jpg', 
},
{ name: 'be an inflatable tube man',
image: '', 
},
{ name: 'wave',
image: 'wave.jpg', 
},
{ name: 'shrug your shoulders',
image: 'shoulders.jpg', 
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
    console.log(timeAmount)
    console.log(newAction.image)
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
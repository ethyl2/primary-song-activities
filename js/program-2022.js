const songLinks = {
    'loa': './love-one-another.html',
    'iltstt': './temple.html',
    'ctstl': './choose-to-serve-the-lord.html',
    'iws': './i-will-shine.html',
    'acp': 'https://www.churchofjesuschrist.org/music/library/childrens-songbook/a-childs-prayer?lang=eng',
    'hshs': 'https://ethyl2.github.io/primary-christmas-2021/qa.html',
    'ktc': './commandments.html',
    'iwbv': './valiant.html',
    'roi': './redeemer-of-israel.html'
}

// Get user's latest audio preferences
let allowAudioOnPage = false
const audioCheckboxEl = document.getElementById('allow-audio')
const allowAudio = JSON.parse(window.localStorage.getItem('audio_permission'))
if (allowAudio) {
  audioCheckboxEl.checked = true
} else {
  audioCheckboxEl.checked = false
}

audioCheckboxEl.addEventListener('change', (e) => {
  if (e.target.checked) {
      window.localStorage.setItem('audio_permission', true)
      allowAudioOnPage = true
  } else {
      window.localStorage.setItem('audio_permission', false)
      allowAudioOnPage = false
  }
})

const pocketEls = document.getElementsByClassName('pocket')
Array.from(pocketEls).forEach(pocket => {
pocket.addEventListener('click', e =>  {
    const currentPocket = e.target
    const animal = currentPocket.previousElementSibling
    if (animal.classList.contains('animal-down')) {
        if (allowAudioOnPage) {
            let audio = new Audio(`./audio/up.wav`)
            audio.play()
        }
        animal.classList.remove('animal-down')
        animal.classList.add('animal-up')
        animal.href =  songLinks[currentPocket.id]

        setTimeout(() => {
            let windowReference = window.open()
            getUrl(currentPocket.id).then(function(url) {
            windowReference.target = "_blank"
            windowReference.location = url
            })
        }, 1600)
    } else {
        if (allowAudioOnPage) {
            let audio = new Audio(`./audio/down.wav`)
            audio.play()
        }
        animal.classList.remove('animal-up')
        animal.classList.add('animal-down')
    }
})
})

async function getUrl(key) {
return songLinks[key]
}
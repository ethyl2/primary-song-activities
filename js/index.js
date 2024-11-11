const songs = [
  { siteLink: "https://ethyl2.github.io/primary-christmas-2021/bells.html", name: 'Christmas Bells'},
  { siteLink: "https://ethyl2.github.io/primary-christmas-2021/picture-a-christmas.html", name: 'Picture a Christmas'},
  { siteLink: "https://ethyl2.github.io/primary-christmas-2021/qa.html", name: 'He Sent His Son'},
  { siteLink: "./do-as-im-doing.html", name:"Do As I'm Doing"},
  { siteLink: "./smile.html", name:'Smiles'},
  { siteLink: "./snowman.html", name:'Once There Was a Snowman'},
  { siteLink: "./wonder.html", name:'I Wonder When He Comes Again'},
  { siteLink: "./child-of-god.html", name:'I Am a Child of God'},
  { siteLink: "./follow-the-prophet.html", name: 'Follow the Prophet'},
  { siteLink: "./fun-to-do.html", name:'Fun to Do'},
  { siteLink: "./beautiful-savior.html", name:'Beautiful Savior',},
  { siteLink: "./lived-in-heaven.html", name:'I Lived in Heaven',},
  { siteLink: "./is-falling.html", name:'Rain is Falling All Around',},
  { siteLink: "./loves-me.html", name:'My Heavenly Father Loves Me',},
  { siteLink: "./live-again.html", name:'Did Jesus Really Live Again?',},
  { siteLink: "./i-will-shine.html", name:'I Will Shine',},
  { siteLink: "./choose-to-serve-the-lord.html", name:'Choose to Serve the Lord',},
  { siteLink: "./rainbows.html", name: 'When I Am Baptized', },
  { siteLink: "./valiant.html", name: 'I Will Be Valiant', },
  { siteLink: "./temple.html", name: 'I Love to See the Temple', },
  { siteLink: "./love-one-another.html", name: 'Love One Another'},
  { siteLink: "./redeemer-of-israel.html", name: 'Redeemer of Israel'},
  { siteLink: "./commandments.html", name: 'Keep the Commandments' },
  { siteLink: "./savior-beside.html", name: 'If the Savior Stood Beside Me' },
  { siteLink: "./quiz.html", name: 'Tell Me the Stories of Jesus' },
  { siteLink: "./come-follow-me.html", name: 'Come Follow Me' },
  { siteLink: "./chapel-doors.html", name: 'The Chapel Doors' },
  { siteLink: "./trying-to-be-like-jesus.html", name: 'I\'m Trying to Be Like Jesus' },
  { siteLink: "./the-miracle.html", name: 'The Miracle' },
  { siteLink: "./behold-the-great-redeemer.html", name: 'Behold the Great Redeemer Die' },
  { siteLink: "./book-of-mormon-stories.html", name: 'Book of Mormon Stories' },
  { siteLink: "./nephis-courage.html", name: 'Nephi\'s Courage' },
  { siteLink: "./my-own-sacred-grove.html", name: 'My Own Sacred Grove' },
  { siteLink: "./testimony.html", name: 'Testimony' },
  { siteLink: "./army-of-helaman.html", name: 'We\'ll Bring the World His Truth' },
]
songs.sort((a, b) => (a.name > b.name) ? 1 : -1)

const bgColors = [
  'purple-700',
  'indigo-700',
  'blue-700',
  'green-700',
  'yellow-700',
  'red-700',
  'pink-700',
  'orange-700',
  'amber-700',
  'lime-700',
  'emerald-700',
  'teal-700',
  'cyan-700',
  'sky-700',
  'violet-700',
  'fuchsia-700',
  'rose-700',
]
let bgColorIndex = 0

const songNav = document.getElementById('song-nav')
songs.forEach(song => {
  const songLink = document.createElement('a')
  songLink.href = song.siteLink
  songLink.target = '_blank'
  songLink.textContent = song.name
  songLink.classList.add('px-4', 'py-2', 'rounded', 'bg-gray-900', 'm-1')
  songLink.classList.add(`hover:bg-${bgColors[bgColorIndex]}`)
  bgColorIndex = (bgColorIndex + 1) % bgColors.length
  songNav.append(songLink)
})

const audioFiles = [
  'amazing-grace.wav',
  'angelic-choir.wav',
  'beautiful-guitar.wav',
  'beautiful-savior.mp3',
  'bird-song.wav',
  'blow.wav',
  'butterflies.wav',
  'child-of-god.mp3',
  'ding.wav',
  'distant-fireworks.wav',
  'do-as-im-doing.mp3',
  'eye-blink.wav',
  'fun-to-do.mp3',
  'harp.wav',
  'heart-beat.wav',
  'i-lived-in-heaven.mp3',
  'live-again.mp3',
  'loves-me.mp3',
  'love-one-another.mp3',
  'match.wav',
  'ocean-waves.wav',
  'prophet.mp3',
  'rain-drips.mp3',
  'rain-is-falling-all-around.mp3',
  'rooster.wav',
  'smiles.mp3',
  'snowman.mp3',
  'sparkler.wav',
  'walking.wav',
  'wind-chimes.wav',
  'wind.mp3',
  'wonder.mp3',
  'when-i-am-baptized.mp3',
  'i-will-be-valiant.mp3',
  'i-love-to-see-the-temple.mp3',
  'redeemer-of-israel.mp3',
  'keep-the-commandments.mp3'
]
const mixTape = document.getElementById('mix-tape')
const audioNameEl = document.getElementById('audio-name')
let audio = null
mixTape.addEventListener('click', () => {
  if (audio) {
    audio.pause()
  }
  const randomAudioFileIndex = Math.floor(Math.random() * audioFiles.length)
  audio = new Audio(`./audio/${audioFiles[randomAudioFileIndex]}`)
  audio.play()
  const audioFileArray = audioFiles[randomAudioFileIndex].split('.')
  const audioName = audioFileArray[0].replace(/-/g, ' ')
  audioNameEl.textContent = `♪ ${audioName} ♪`
})
const currentYearSpan = document.getElementById('current-year')
currentYearSpan.textContent = new Date().getFullYear()

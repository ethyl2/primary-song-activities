
function websiteVisits(response) {
    document.querySelector("#visits").textContent = response.value;
    document.querySelector('#visitors').textContent = 'visitors';
  }

const lyricClips = [
  // The Miracle
  { audioFile: './static/audio/Jesus_walked_upon_th_785.mp3',
    song: 'The Miracle',
    lyrics: [
      'Jesus walked upon the water',
      'He stilled the storm and calmed the angry sea',
      'With His hands He healed the leper',
      'He made the lame to walk, the blind to see',
    ],
  },
  {
    audioFile: './static/audio/He_fed_a_thousand_pe_900.mp3',
    song: 'The Miracle',
    lyrics: [
      'He fed a thousand people with a loaf or two of bread',
      "And when the ruler's daughter died,",
      'He raised her from the dead',
    ]
  },
  {
    audioFile: './static/audio/Jesus_is_a_God_of_mi_302.mp3',
    song: 'The Miracle',
    lyrics: [
      'Jesus is a God of miracles',
      'Nothing is at all impossible to Him',
      'But I know this:',
      'Of all His miracles the most incredible must be',
      'The miracle that rescues me',
    ]
  },
  {
    audioFile: './static/audio/Jesus_bled_and_died__462.mp3',
    song: 'The Miracle',
    lyrics: [
      'Jesus bled and died to save me',
      'A price that I could never pay alone',
      'When He rose again, He gave me',
      'The greatest gift the world has ever known',
    ]
  },
  {
    audioFile: './static/audio/Yes_I_can_be_forgiv_250.mp3',
    song: 'The Miracle',
    lyrics: [
      'Yes, I can be forgiven every time that I repent',
      'And someday He will lift me up to live with Him again',
    ]
  },

  // Gethsemane
  {
    audioFile: './static/audio/Jesus_climbed_the_hi_578.mp3',
    song: 'Gethsemane',
    lyrics: [
      'Jesus climbed the hill to the garden still.',
      'His steps were heavy and slow.',
      'Love and a prayer took Him there',
      'To the place only He could go.'
    ]
  },
  {
    audioFile: './static/audio/He_felt_all_that_was_849.mp3',
    song: 'Gethsemane',
    lyrics: [
      'He felt all that was sad, wicked, or bad,',
      'All the pain we would ever know.',
      'While His friends were asleep, He fought to keep',
      'His promise made long ago.'
    ]
  },
  {
    audioFile: './static/audio/Geth_said_man_ee_Je_171.mp3',
    song: 'Gethsemane',
    lyrics: [
      'Gethsemane. Jesus loves me,',
      'So He went willingly to Gethsemane.',
    ]
  },
  {
    audioFile: './static/audio/The_hardest_thing_th_449.mp3',
    song: 'Gethsemane',
    lyrics: [
      'The hardest thing that ever was done,',
      'The greatest pain that ever was known,',
      'The biggest battle that ever was won—',
      'This was done by Jesus!',
      'The fight was won by Jesus!',
    ]
  },
  {
    audioFile: './static/audio/Geth_said_man_ee_Je_215.mp3',
    song: 'Gethsemane',
    lyrics: [
      'Gethsemane. Jesus loves me,',
      'So He gives His gift to me from Gethsemane.',
    ]
  },

  // Baptism
  {
    audioFile: './static/audio/Jesus_came_to_John_t_201.mp3',
    song: 'Baptism',
    lyrics: [
      'Jesus came to John the Baptist',
      'In Judea long ago,',
      'And was baptized by immersion',
      "In the River Jordan's flow.",
    ]
  },
  {
    audioFile: './static/audio/To_fulfill_the_law__428.mp3',
    song: 'Baptism',
    lyrics: [
      `“To fulfill the law,” said Jesus,`,
      `When the Baptist questioned why,`,
      `“And to enter with my Father`,
      `In the kingdom up on high.”`
    ]
  },
  {
    audioFile: './static/audio/Now_we_know_that_we__980.mp3',
    song: 'Baptism',
    lyrics: [
      'Now we know that we must also',
      "Witness faith in Jesus' word,",
      'Be baptized to show obedience,',
      'As was Jesus Christ, our Lord.',
    ]
  },

  // If the Savior Stood Beside Me
  {
    audioFile: './static/audio/If_the_savior_stood__843.mp3',
    song: 'If the Savior Stood Beside Me',
    lyrics: [
      'If the savior stood beside me',
      'Would I do the things I do?',
      'Would I think of his commandments and try harder to be true?',
    ]
  },
  {
    audioFile: './static/audio/Would_I_follow_his_e_671.mp3',
    song: 'If the Savior Stood Beside Me',
    lyrics: [
      'Would I follow his example?',
      'Would I live more righteously if I could see the savior standing nigh',
      'Watching over me?',
    ]
  },
  {
    audioFile: './static/audio/Would_my_words_be_tr_813.mp3',
    song: 'If the Savior Stood Beside Me',
    lyrics: [
      'Would my words be true and kind if he were never far away?',
      'Would I try to share the gospel?',
    ]
  },
  {
    audioFile: './static/audio/He_is_always_near_me_973.mp3',
    song: 'If the Savior Stood Beside Me',
    lyrics: [
      'He is always near me, though I do not see him there',
      'And because he loves me dearly',
      'I am in his watchful care'
    ]
  },
  {
    audioFile: './static/audio/Ill_be_the_kind_of__936.mp3',
    song: 'If the Savior Stood Beside Me',
    lyrics: [
      "I'll be the kind of person that I know I'd like to be",
      'If I could see the savior standing nigh watching over me',
    ]
  },

  // Come Follow Me
  {
    audioFile: './static/audio/I_would_have_followe_744.mp3',
    song: 'Come Follow Me (Mashup)',
    lyrics: [
      'I would have followed Jesus on shores of Gallilee',
      'I would have listened as he taught the children at His knee.'
    ]
  },
  {
    audioFile: './static/audio/As_I_read_the_script_652.mp3',
    song: 'Come Follow Me (Mashup)',
    lyrics: [
      'As I read the scriptures, I hear Him lovingly calling me to walk with Him:',
      `"Come, follow Me."`,
    ]
  },
  {
    audioFile: './static/audio/Come_follow_me_the_440.mp3',
    song: 'Come Follow Me',
    lyrics: [
      `"Come, follow me," the Savior said.`,
      `Then let us in his footsteps tread,`,
      'For thus alone can we be one',
      `With God's own loved, begotten Son.`
    ]
  },
  {
    audioFile: './static/audio/_let_us_in_his_foots_376.mp3',
    song: 'Come Follow Me',
    lyrics: [
      `Let us in his footsteps tread,`,
      'For thus alone can we be one',
      `With God's own loved, begotten Son.`
    ]
  },

  // Behold the Great Redeemer Die
  {
    audioFile: './static/audio/Bee_hold_the_great_R_472.mp3',
    song: 'Behold the Great Redeemer Die',
    lyrics: [
      'Behold the great Redeemer die,',
      'A broken law to satisfy.',
    ]
  },
  {
    audioFile: './static/audio/He_dies_a_sacrifice__251.mp3',
    song: 'Behold the Great Redeemer Die',
    lyrics: [
      'He dies a sacrifice for sin,',
      'That man may live and glory win.',
    ]
  },
]

const getLyricsButton = document.getElementById('get-lyrics')
const showAnswerButton = document.getElementById('show-answer')
const answerEl = document.getElementById('answer')
const peakButton = document.getElementById('peak')
const lyricsEl = document.getElementById('lyrics')
const messageEl = document.getElementById('message')

getLyricsButton.addEventListener('click', () => {
  answerEl.classList.add('hidden')
  lyricsEl.classList.add('hidden')
  lyricsEl.classList.remove('flex', 'flex-col')
  const randomClip = lyricClips[Math.floor(Math.random() * lyricClips.length)]
  const audio = new Audio(randomClip.audioFile)
  audio.play()
  messageEl.textContent = ''

  // Populate the answer element with the song title
  answerEl.textContent = randomClip.song
  showAnswerButton.classList.remove('hidden')
  showAnswerButton.classList.add('flex')
  showAnswerButton.textContent = 'Show Answer'

  // Clear out the lyrics element
  lyricsEl.innerHTML = ''

  // Populate the lyrics element with the lyrics
  randomClip.lyrics.forEach(line => {
    const lineEl = document.createElement('p')
    lineEl.textContent = line
    lyricsEl.appendChild(lineEl)
  })
  peakButton.classList.remove('hidden')
  peakButton.classList.add('flex')
  peakButton.textContent = 'Peak'
})

showAnswerButton.addEventListener('click', () => {
  if (answerEl.classList.contains('hidden')) {
    answerEl.classList.remove('hidden')
    answerEl.classList.add('flex')
    showAnswerButton.textContent = 'Hide Answer'
  } else {
    answerEl.classList.add('hidden')
    answerEl.classList.remove('flex')
    showAnswerButton.textContent = 'Show Answer'
  }
  messageEl.textContent = 'Click the Listen button to play again!'
})

peakButton.addEventListener('click', () => {
  if (lyricsEl.classList.contains('hidden')) {
    lyricsEl.classList.remove('hidden')
    lyricsEl.classList.add('flex', 'flex-col')
    peakButton.textContent = 'Hide Words'
  } else {
    lyricsEl.classList.add('hidden')
    lyricsEl.classList.remove('flex', 'flex-col')
    peakButton.textContent = 'Peak'
  }

})

const currentYearSpan = document.getElementById('current-year')
currentYearSpan.textContent = new Date().getFullYear()

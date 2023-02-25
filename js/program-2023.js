
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
  { audioFile: './static/audio/Jesus_walked_upon_t_435.mp3',
    song: 'The Miracle',
    lyrics: [
      'Jesus walked upon the water',
      'He stilled the storm and calmed the angry sea',
    ],
  },
  { audioFile: './static/audio/With_His_hands_He_h_642.mp3',
    song: 'The Miracle',
    lyrics: [
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
    audioFile: './static/audio/He_fed_a_thousand_pe_882.mp3',
    song: 'The Miracle',
    lyrics: [
      'He fed a thousand people with a loaf or two of bread',
    ]
  },
  {
    audioFile: './static/audio/And_when_the_rulers_730.mp3',
    song: 'The Miracle',
    lyrics: [
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
    audioFile: './static/audio/Of_all_His_miracles_123.mp3',
    song: 'The Miracle',
    lyrics: [
      'Of all His miracles the most incredible must be',
      'The miracle that rescues me',
    ]
  },
  {
    audioFile: './static/audio/Jesus_is_a_God_of_m_591.mp3',
    song: 'The Miracle',
    lyrics: [
      'Jesus is a God of miracles',
      'Nothing is at all impossible to Him',
    ]
  },
  {
    audioFile: './static/audio/Jesus_is_a_God_of_m_208.mp3',
    song: 'The Miracle',
    lyrics: [
      'Jesus is a God of miracles',
    ]
  },
  {
    audioFile: './static/audio/Nothing_is_at_all_im_614.mp3',
    song: 'The Miracle',
    lyrics: [
      'Nothing is at all impossible to Him',
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
    audioFile: './static/audio/Jesus_bled_and_died_249.mp3',
    song: 'The Miracle',
    lyrics: [
      'Jesus bled and died to save me',
      'A price that I could never pay alone',
    ]
  },
  {
    audioFile: './static/audio/When_He_rose_again__331.mp3',
    song: 'The Miracle',
    lyrics: [
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
    audioFile: './static/audio/The_fight_was_won_by_864.mp3',
    song: 'Gethsemane',
    lyrics: [
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
  {
    audioFile: './static/audio/He_felt_all_that_was_796.mp3',
    song: 'Gethsemane',
    lyrics: [
      'He felt all that was sad, wicked, or bad,',
      'All the pain we would ever know.',
    ]
  },
  {
    audioFile: './static/audio/While_His_friends_w_201.mp3',
    song: 'Gethsemane',
    lyrics: [
      'While His friends were asleep, He fought to keep',
      'His promise made long ago.'
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

  // Tell Me the Stories of Jesus
  {
    audioFile: './static/audio/Things_I_would_ask_h_811.mp3',
    song: 'Tell Me the Stories of Jesus',
    lyrics: [
      'Things I would ask him to tell me if he were here.',
      'Scenes by the wayside, tales of the sea.',
    ],
  },
  {
    audioFile: './static/audio/Oh_let_me_hear_how__249.mp3',
    song: 'Tell Me the Stories of Jesus',
    lyrics: [
      'Oh, let me hear how the children stood round his knee.',
      'I shall imagine his blessings resting on me;',
    ]
  },
  {
    audioFile: './static/audio/Words_full_of_kindne_683.mp3',
    song: 'Tell Me the Stories of Jesus',
    lyrics: [
      'Words full of kindness, deeds full of grace,',
      'All in the love-light of Jesus\' face.',
    ]
  },
  {
    audioFile: './static/audio/Tell_me_in_accents__244.mp3',
    song: 'Tell Me the Stories of Jesus',
    lyrics: [
      'Tell me, in accents of wonder, how rolled the sea,',
      'Tossing the boat in a tempest on Galilee!',
    ]
  },
  {
    audioFile: './static/audio/And_how_the_Master__135.mp3',
    song: 'Tell Me the Stories of Jesus',
    lyrics: [
      'And how the Master, ready and kind,',
      'Chided the billows and hushed the wind.',
    ]
  },

  // My Heavenly Father Loves Me
  {
    audioFile: './static/audio/Whenever_I_hear_the__277.mp3',
    song: 'My Heavenly Father Loves Me',
    lyrics: [
      'Whenever I hear the song of a bird',
      'Or look at the blue, blue sky,',
    ],
  },
  {
    audioFile: './static/audio/Whenever_I_feel_the__531.mp3',
    song: 'My Heavenly Father Loves Me',
    lyrics: [
      'Whenever I feel the rain on my face',
      'Or the wind as it rushes by,',
    ],
  },
  {
    audioFile: './static/audio/Whenever_I_touch_a_v_217.mp3',
    song: 'My Heavenly Father Loves Me',
    lyrics: [
      'Whenever I touch a velvet rose',
      'Or walk by our lilac tree,',
    ]
  },
  {
    audioFile: './static/audio/Tell_me_in_accents__244.mp3',
    song: 'My Heavenly Father Loves Me',
    lyrics: [
      'Tell me, in accents of wonder, how rolled the sea,',
      'Tossing the boat in a tempest on Galilee!',
    ]
  },
  {
    audioFile: './static/audio/Im_glad_that_I_live_761.mp3',
    song: 'My Heavenly Father Loves Me',
    lyrics: [
      'I\'m glad that I live in this beautiful world',
      'Heav\'nly Father created for me.',
    ]
  },
  {
    audioFile: './static/audio/He_gave_me_my_eyes_t_940.mp3',
    song: 'My Heavenly Father Loves Me',
    lyrics: [
      'He gave me my eyes that I might see',
      'The color of butterfly wings.',
    ],
  },
  {
    audioFile: './static/audio/He_gave_me_my_ears_t_162.mp3',
    song: 'My Heavenly Father Loves Me',
    lyrics: [
      'He gave me my ears that I might hear',
      'The magical sound of things.',
    ],
  },
  {
    audioFile: './static/audio/He_gave_me_my_life__788.mp3',
    song: 'My Heavenly Father Loves Me',
    lyrics: [
      'He gave me my life, my mind, my heart:',
      'I thank him rev\'rently',
    ]
  },
  {
    audioFile: './static/audio/For_all_his_creation_620.mp3',
    song: 'My Heavenly Father Loves Me',
    lyrics: [
      'For all his creations, of which I\'m a part.',
      'Yes, I know Heav\'nly Father loves me.',
    ]
  },
  {
    audioFile: './static/audio/I_thank_hhim_rev_ren_790.mp3',
    song: 'My Heavenly Father Loves Me',
    lyrics: [
      'I thank him rev\'rently',
      'For all his creations, of which I\'m a part.',
    ]
  },

  // I'm Trying to Be Like Jesus
  {
    audioFile: './static/audio/Im_following_in_his_195.mp3',
    song: 'I\'m Trying to Be Like Jesus',
    lyrics: [
      'I\'m following in his ways.',
      'I\'m trying to love as he did, in all that I do and say.',
    ]
  },
  {
    audioFile: './static/audio/At_times_I_am_tempte_624.mp3',
    song: 'I\'m Trying to Be Like Jesus',
    lyrics: [
      'At times I am tempted to make a wrong choice,',
      'But I try to listen as the still small voice whispers,',
    ]
  },
  {
    audioFile: './static/audio/But_I_try_to_liste_347.mp3',
    song: 'I\'m Trying to Be Like Jesus',
    lyrics: [
      'But I try to listen as the still small voice whispers,',
      '"Love one another as Jesus loves you.',
    ]
  },
  {
    audioFile: './static/audio/Try_to_show_kindness_720.mp3',
    song: 'I\'m Trying to Be Like Jesus',
    lyrics: [
      'Try to show kindness in all that you do.',
    ]
  },
  {
    audioFile: './static/audio/Be_gentle_and_loving_401.mp3',
    song: 'I\'m Trying to Be Like Jesus',
    lyrics: [
      'Be gentle and loving in deed and in thought,',
      'For these are the things Jesus taught."',
    ]
  },
  {
    audioFile: './static/audio/Im_trying_to_love_m_362.mp3',
    song: 'I\'m Trying to Be Like Jesus',
    lyrics: [
      'I\'m trying to love my neighbor;',
    ]
  },
  {
    audioFile: './static/audio/Im_learning_to_serv_916.mp3',
    song: 'I\'m Trying to Be Like Jesus',
    lyrics: [
      'I\'m learning to serve my friends.',
    ]
  },
  {
    audioFile: './static/audio/I_watch_for_the_day__773.mp3',
    song: 'I\'m Trying to Be Like Jesus',
    lyrics: [
      'I watch for the day of gladness when Jesus will come again.',
    ]
  },
  {
    audioFile: './static/audio/I_try_to_remember_th_978.mp3',
    song: 'I\'m Trying to Be Like Jesus',
    lyrics: [
      'I try to remember the lessons he taught.',
      'Then the Holy Spirit enters into my thoughts',
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

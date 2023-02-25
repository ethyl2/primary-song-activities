
  const currentYearSpan = document.getElementById('current-year')
  currentYearSpan.textContent = new Date().getFullYear()

  const teacherImage = document.getElementById('teacher')
  const teacherIntroEl = document.getElementById('teacher-intro')

  const verseOneAudioEl = document.getElementById("verse-1")
  const verseTwoAudioEl = document.getElementById("verse-2")
  const verseThreeAudioEl = document.getElementById("verse-3")

  const teacherVerseOneImage = document.getElementById('teacher-1')
  const teacherVerseTwoImage = document.getElementById('teacher-2')
  const teacherVerseThreeImage = document.getElementById('teacher-3')

  const revealTeacherOneButton = document.getElementById('reveal-teacher-1')
  const revealTeacherTwoButton = document.getElementById('reveal-teacher-2')
  const revealTeacherThreeButton = document.getElementById('reveal-teacher-3')

  const revealOneEl = document.getElementById('change-1')
  const revealTwoEl = document.getElementById('change-2')
  const revealThreeEl = document.getElementById('change-3')

  let teacherNum = 1

  // verse 1
  verseOneAudioEl.addEventListener('play', function () {
    teacherImage.classList.add('hidden')
    teacherIntroEl.classList.add('hidden')

    teacherVerseOneImage.classList.add('hidden')
    teacherVerseTwoImage.classList.add('hidden')
    teacherVerseThreeImage.classList.add('hidden')
    revealOneEl.classList.add('hidden')
    revealTwoEl.classList.add('hidden')
    revealThreeEl.classList.add('hidden')
    revealTeacherOneButton.classList.add('hidden')
    revealTeacherTwoButton.classList.add('hidden')
    revealTeacherThreeButton.classList.add('hidden')
    setTimeout(() => {
      teacherNum = getRandomNumber()
      teacherVerseOneImage.src = './static/images/teacher/teacher-' + teacherNum + '.png'
      teacherVerseOneImage.classList.remove('hidden')
      revealTeacherOneButton.classList.remove('hidden')
      teacherVerseTwoImage.classList.add('hidden')
      teacherVerseThreeImage.classList.add('hidden')
    }, 3000)
  })

  revealTeacherOneButton.addEventListener('click', () => {
    revealOneEl.classList.remove('hidden')
    revealOneEl.textContent = teacherDifferences[teacherNum]
    revealTeacherOneButton.classList.add('hidden')
  })

  // verse 2

  verseTwoAudioEl.addEventListener('play', function () {
    teacherImage.classList.add('hidden')
    teacherIntroEl.classList.add('hidden')

    teacherVerseOneImage.classList.add('hidden')
    teacherVerseTwoImage.classList.add('hidden')
    teacherVerseThreeImage.classList.add('hidden')
    revealOneEl.classList.add('hidden')
    revealTwoEl.classList.add('hidden')
    revealThreeEl.classList.add('hidden')
    revealTeacherOneButton.classList.add('hidden')
    revealTeacherTwoButton.classList.add('hidden')
    revealTeacherThreeButton.classList.add('hidden')
    setTimeout(() => {
      teacherNum = getRandomNumber()
      teacherVerseTwoImage.src = './static/images/teacher/teacher-' + teacherNum + '.png'
      teacherVerseTwoImage.classList.remove('hidden')
      revealTeacherTwoButton.classList.remove('hidden')
      teacherVerseOneImage.classList.add('hidden')
      teacherVerseThreeImage.classList.add('hidden')
    }, 3000)
  })

  revealTeacherTwoButton.addEventListener('click', () => {
    revealTwoEl.classList.remove('hidden')
    revealTwoEl.textContent = teacherDifferences[teacherNum]
    revealTeacherTwoButton.classList.add('hidden')
  })

  // verse 3

  verseThreeAudioEl.addEventListener('play', function () {
    teacherImage.classList.add('hidden')
    teacherIntroEl.classList.add('hidden')

    teacherVerseOneImage.classList.add('hidden')
    teacherVerseTwoImage.classList.add('hidden')
    teacherVerseThreeImage.classList.add('hidden')
    revealOneEl.classList.add('hidden')
    revealTwoEl.classList.add('hidden')
    revealThreeEl.classList.add('hidden')
    revealTeacherOneButton.classList.add('hidden')
    revealTeacherTwoButton.classList.add('hidden')
    revealTeacherThreeButton.classList.add('hidden')
    setTimeout(() => {
      teacherNum = getRandomNumber()
      teacherVerseThreeImage.src = './static/images/teacher/teacher-' + teacherNum + '.png'
      teacherVerseThreeImage.classList.remove('hidden')
      revealTeacherThreeButton.classList.remove('hidden')
      teacherVerseOneImage.classList.add('hidden')
      teacherVerseTwoImage.classList.add('hidden')
    }, 3000)
  })

  revealTeacherThreeButton.addEventListener('click', () => {
    revealThreeEl.classList.remove('hidden')
    revealThreeEl.textContent = teacherDifferences[teacherNum]
    revealTeacherThreeButton.classList.add('hidden')
  })




  const teacherDifferences = [
    'ring', // 0
    'nothing!', // 1
    'Jesus is written on her paper', // 2
    'hat', // 3
    'orange and blue sneakers', // 4
    'flower earring', // 5
    'pearl necklace', // 6
    'socks', // 7
    'bracelets', // 8
    'lipstick', // 9
    'barette', // 10
    'wig', // 11
    'flower design on skirt', // 12
    'shorts', // 13
    'belt', // 14
    'pink pleated skirt', // 15
    'jean skirt', // 16
    'orange skirt and belt', // 17
    'blue sneakers', // 18
    'purse', // 19
    'dog on leash', // 20
    'striped scarf', // 21
    'winter scarf', // 22
    'cowgirl hat', // 23
    'boots', // 24
    'freckles', // 25
    'heart sunglasses', // 26
    'pineapple sunglasses', // 27
  ]

  function getRandomNumber() {
    const randomNum =  Math.floor(Math.random() * teacherDifferences.length)
    return randomNum
  }


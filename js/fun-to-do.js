const activities = [
    {
      'name' : 'Baking some cupcakes',
      'slug' : 'baking-some-cupcakes'
    },
    {
      'name': 'Coding a website',
      'slug': 'coding-a-website'
    },
    {
      'name': 'Cooking some dinner',
      'slug': 'cooking-some-dinner'
    },
    {
      'name': 'Flying a kite',
      'slug': 'flying-a-kite'
    },
    {
      'name': 'Writing with chalk',
      'slug': 'writing-with-chalk'
    },
    {
      'name': 'Jumping in puddles',
      'slug': 'jumping-in-puddles'
    },
    {
      'name': 'Going down slides',
      'slug': 'going-down-slides'
    },
    {
      'name': 'Popping popcorn',
      'slug': 'popping-popcorn'
    },
    {
      'name': 'Texting a friend',
      'slug': 'texting-a-friend',
    },
    {
      'name': 'Painting a rock',
      'slug': 'painting-a-rock'
    },
    {
      'name': 'Petting a snake',
      'slug': 'petting-a-snake'
    },
    {
      'name': 'Playing with toys',
      'slug': 'playing-with-toys'
    },
    {
      'name': 'Reading a book',
      'slug': 'reading-a-book'
    },
    {
      'name': 'Taking a bath',
      'slug': 'taking-a-bath'
    },
    {
      'name': 'Doing some math',
      'slug': 'doing-some-math'
    },
    {
      'name': 'Climbing a tree',
      'slug': 'climbing-a-tree'
    },
    {
      'name': 'Painting your nails',
      'slug': 'painting-your-nails'
    },
    {
      'name': 'Riding a bike',
      'slug': 'riding-a-bike'
    },
    {
      'name': 'Playing pretend',
      'slug': 'playing-pretend'
    },
    {
      'name': 'Taking a selfie',
      'slug': 'taking-a-selfie'
    },
    {
      'name': 'Licking your ice cream',
      'slug': 'licking-your-ice-cream'
    },
    {
      'name': 'Playing a game',
      'slug': 'playing-a-game'
    },
    {
      'name': 'Riding a train',
      'slug': 'riding-a-train'
    },
    {
      'name': 'Calling a friend',
      'slug': 'calling-a-friend'
    },
    {
      'name': 'Wearing a mask',
      'slug': 'wearing-a-mask'
    },
    {
      'name': 'Making some toast',
      'slug': 'making-some-toast'
    },
    {
      'name': 'Wearing a wig',
      'slug': 'wearing-a-wig'
    },
    {
      'name': 'Playing disc golf',
      'slug': 'playing-disc-golf'
    },
    {
      'name': 'Eating some tacos',
      'slug': 'eating-some-tacos'
    },
    {
      'name': 'Brushing your teeth',
      'slug': 'brushing-your-teeth'
    },
    {
      'name': 'Blowing some bubbles',
      'slug': 'blowing-some-bubbles'
    },
    {
      'name': 'Doing a cartwheel',
      'slug': 'doing-a-cartwheel'
    },
    {
      'name': 'Smelling a flower',
      'slug': 'smelling-a-flower'
    },
    {
      'name': 'Hitting a ball',
      'slug': 'hitting-a-ball'
    },
    {
      'name': 'Writing a poem',
      'slug': 'writing-a-poem'
    },
    {
      'name': 'Playing a cello',
      'slug': 'playing-a-cello'
    },
    {
      'name': 'Plucking a cello',
      'slug': 'plucking-a-cello'
    },
    {
      'name': 'Drawing a peacock',
      'slug': 'drawing-a-peacock'
    },
    {
      'name': 'Meeting a penguin',
      'slug': 'meeting-a-penguin'
    },
    {
      'name': 'Singing a song',
      'slug': 'singing-a-song'
    },
    {
        'name': 'Building with legos',
        'slug': 'legos'
    },
    {
        'name': 'Walking a dog',
        'slug': 'walking-a-dog'
    },
    {
        'name': 'Feeding some fish',
        'slug': 'feeding-some-fish'
    },
    {
        'name': 'Climbing a wall',
        'slug': 'climbing-a-wall'
    },
    {
        'name': 'Swimming around',
        'slug': 'swimming-around'
    },
    {
        'name': 'Planting a seed',
        'slug': 'planting-a-seed'
    },
    {
        'name': 'Flying a plane',
        'slug': 'flying-a-plane'
    },
    {
        'name': 'Folding some paper',
        'slug': 'folding-some-paper'
    },
    {
        'name': 'Picking some fruit',
        'slug': 'picking-some-fruit'
    },
    {
        'name': 'Roasting a marshmallow',
        'slug': 'roasting-a-marshmallow'
    },
    {
        'name': 'Hunting for eggs',
        'slug': 'hunting-for-eggs'
    },
    {
        'name': 'Giving a hug',
        'slug': 'giving-a-hug'
    },
    {
        'name': 'Skating around',
        'slug': 'skating-around'
    },
    {
        'name': 'Sending a letter',
        'slug': 'sending-a-letter'
    },
    {
        'name': 'Slurping some jello',
        'slug': 'slurping-some-jello'
    },
    {
        'name': 'Exploring a cave',
        'slug': 'exploring-a-cave'
    },
    {
        'name': 'Blowing a pinwheel',
        'slug': 'blowing-a-pinwheel'
    },
    {
        'name': 'Riding a horse',
        'slug': 'riding-a-horse'
    },
    {
        'name': 'Jumping in leaves',
        'slug': 'jumping-in-leaves'
    },
    {
        'name': 'Playing with slime',
        'slug': 'playing-with-slime'
    },
    {
        'name': 'Carving a pumpkin',
        'slug': 'carving-a-pumpkin'
    },
    {
        'name': 'Wrapping a gift',
        'slug': 'wrapping-a-gift'
    },
    {
        'name': 'Holding a baby',
        'slug': 'holding-a-baby'
    },
  ]
  const buttonSection = document.getElementById('button-section')
  const currentActivityTextEls = document.querySelectorAll('.current-activity')
  const currentActivityMainImage = document.getElementById('current-activity-main-img')
  const randomPickButton = document.getElementById('random-pick')

  const shuffledActivities = activities.sort((a, b) => 0.5 - Math.random())

  shuffledActivities.forEach(activity => {
    const activityButton = document.createElement('button')
    activityButton.classList.add('w-20', 'h-20', 'sm:w-24', 'sm:h-24', 'bg-no-repeat', 'bg-cover', 'bg-center', 'rounded', 'm-0.5', 'md:m-3', 'md:w-32', 'md:h-32', 'lg:w-36', 'lg:h-36')
    activityButton.style.backgroundImage = `url("./images/fun-to-do/${activity.slug}.jpg")`
    activityButton.style.border = '2px solid black'
    activityButton.setAttribute('data-activity', activity.name)
    activityButton.addEventListener('click', handleClick)
    buttonSection.append(activityButton)
  })

  // Start the focus on the singing activity's button
  const singingButton = document.querySelector('button[data-activity="Singing a song"]')
  singingButton.focus()

  function handleClick(event) {
    // Change the current activity image and text
    const newBackgroundImage = event.target.style['background-image']
    currentActivityMainImage.style['background-image'] = newBackgroundImage
    currentActivityTextEls.forEach(el => {
      el.textContent = event.target.getAttribute('data-activity')
    })
  }

randomPickButton.addEventListener('click', () => {
    const randomActivity = activities[Math.floor(Math.random() * activities.length)] 
    const randomActivityButton = document.querySelector(`button[data-activity="${randomActivity.name}"]`)   
    randomActivityButton.click()
})
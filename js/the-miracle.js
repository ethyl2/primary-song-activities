const lyricsInChunks = [
    {
        text: `Jesus walked upon the water`,
        imgUrl: './static/images/miracle/jesus-walks-on-water.jpeg'
    },
    {
        text: `He stilled the storm and calmed the angry sea`,
        imgUrl: './static/images/stories-of-jesus/jesus-rebukes-storm.jpeg'
    },
    {
        text: `With His hands He healed the leper`,
        imgUrl: './static/images/miracle/jesus_ten_lepers_parable.jpeg'
    },
    {
        text: `He made the lame to walk, the blind to see`,
        imgUrl: './static/images/miracle/christ_healing_the_blind_man.jpeg'
    },
    {
        text: `He fed a thousand people with a loaf or two of bread`,
        imgUrl: './static/images/stories-of-jesus/loaves-and-fishes-cropped.jpeg'
    },
    {
        text: `And when the ruler's daughter died He raised her from the dead`,
        imgUrl: './static/images/stories-of-jesus/jesus-jairus-daughter-cropped.jpeg'
    },
    {
        text:  `Jesus is a God of miracles`,
        imgUrl: './static/images/miracle/jesus-nephite-woman-cropped.jpeg'
    },
    {
        text: `Nothing is at all impossible to Him`,
        imgUrl: './images/beautiful-savior/jesus-creator-barrett.jpg'
    },
    {
        text: `But I know this, of all His miracles, the most incredible must be the miracle that rescues me`,
        imgUrl: './static/images/miracle/jesus-nephite-children.jpeg'
    },
    {
        text: `Jesus bled and died to save me -- a price that I could never pay alone`,
        imgUrl: './static/images/miracle/jesus_dies_cross.jpeg'
    },
    {
        text: `When He rose again, He gave me The greatest gift the world has ever known`,
        imgUrl: './static/images/miracle/jesus_mary_new_testament_stories.jpeg'
    },
    {
        text: `Yes, I can be forgiven every time that I repent`,
        imgUrl: './static/images/miracle/bible_video_jesus_miracles.jpeg'
    },
    {
        text: `And someday He will lift me up to live with Him again`,
        imgUrl: './images/wonder/second-coming-sm.jpeg'
    },
    ]

    const chunkContainer = document.getElementById('lyrics-chunks')

    const colorOptions = [
        'bg-blue-500',
        'bg-blue-700',
        'bg-green-500',
        'bg-purple-500',
        'bg-purple-700',
        'bg-green-700',
    ]

    lyricsInChunks.forEach(chunk => {
        const button = document.createElement("button")
        button.classList.add('flex', 'flex-col', 'items-center', 'justify-center', 'max-w-xs', 'w-full', 'p-2', 'md:p-4', 'text-white', 'rounded', 'shadow-lg', 'hover:bg-black', 'focus:outline-none', 'focus:ring-2', 'focus:ring-blue-400', 'focus:ring-opacity-75', 'm-1')
        button.classList.add(colorOptions[Math.floor(Math.random() * colorOptions.length)])
        const buttonImage = document.createElement("img")
        buttonImage.src = chunk.imgUrl
        buttonImage.classList.add('rounded-full', 'h-24', 'w-24', 'object-cover', 'md:w-48', 'md:h-48', 'pointer-events-none', 'border-4', 'border-white')
        button.appendChild(buttonImage)
        const span = document.createElement("span")
        span.classList.add('text-transparent', 'text-xs', 'md:text-base', 'pt-2', 'text-center', 'pointer-events-none')
        span.textContent = chunk.text
        button.appendChild(span)
        button.addEventListener("click", () => {
            responsiveVoice.speak(chunk.text)
            span.classList.remove('text-transparent')
            span.classList.add('text-white')
        })
        chunkContainer.appendChild(button)
    })
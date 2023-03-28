const buildContainerEl = document.getElementById('build-container')
const puddleEl = document.getElementById('puddle')

function snowball(event) {
    if (event.target.classList.contains('sun')) {
        const snowballs = document.querySelectorAll('.snowball')
        snowballs.forEach( snowball => {
            snowball.classList.remove('bg-white', 'shadow')
        })
        console.log('sun')
    }
    else if (event.target.classList.contains('snowball')) {
        event.target.classList.toggle('bg-white')
        event.target.classList.toggle('shadow')
    } else {
        let snowballEl = document.createElement('div')
        snowballEl.classList.add('h-24', 'w-24', 'rounded-full', 'bg-white', 'absolute', 'shadow', 'snowball', 'transform' , 'duration-500')
        snowballEl.style.left = event.offsetX - 48 + 'px'
        snowballEl.style.top = event.offsetY - 48 + 'px'
        buildContainerEl.append(snowballEl)
    }
    const snowballs = document.querySelectorAll('.snowball')
    let visibleSnowballCount = 0
    snowballs.forEach( snowball => {
        if (snowball.classList.contains('bg-white')) {
            visibleSnowballCount++
        }
    })

    if (snowballs.length === 0 || visibleSnowballCount === 0) {
        // No snowballs, so display puddle
        setTimeout(() => {
            puddleEl.classList.remove('hidden')
        puddleEl.classList.add('block')
        }, 500)
    } else {
            // If snowballs are present and visible, remove puddle
        puddleEl.classList.remove('block')
        puddleEl.classList.add('hidden')
    }
}

buildContainerEl.addEventListener('click', snowball)
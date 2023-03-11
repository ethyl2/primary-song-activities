const prophetImage = document.getElementById('prophet')
const blessingsMailEl = document.getElementById('blessings-mail')
const blessingsSection = document.getElementById('blessings')
prophetImage.addEventListener('click', () => {
    blessingsMailEl.classList.remove('hidden')
    blessingsMailEl.classList.add('flier')
})

let counter = 0
blessingsMailEl.addEventListener('click', () => {
    if (counter < blessingsSection.children.length) {
    blessingsSection.classList.remove('hidden')
    blessingsSection.children[counter].classList.remove('hidden')
    counter++
    }
})
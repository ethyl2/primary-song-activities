const button1 = document.getElementById('button1')
const answer1 = document.getElementById('answer1')
button1.addEventListener('click', () => {
    answer1.classList.remove('opacity-0')
    answer1.classList.add('opacity-100')
})

const button2 = document.getElementById('button2')
const answer2 = document.getElementById('answer2')
button2.addEventListener('click', () => {
    answer2.classList.remove('opacity-0')
    answer2.classList.add('opacity-100')
})

const button3= document.getElementById('button3')
const answer3 = document.getElementById('answer3')
button3.addEventListener('click', () => {
    answer3.classList.remove('opacity-0')
    answer3.classList.add('opacity-100')
})

window.addEventListener('load', () => {
    console.log('loaded')
    answer1.classList.remove('hidden')
    answer2.classList.remove('hidden')
    answer3.classList.remove('hidden')
})
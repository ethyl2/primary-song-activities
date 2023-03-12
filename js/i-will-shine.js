const candle = document.getElementById('candle')
const candleNotLit = document.getElementById('candle-not-lit')
const glowCircle = document.getElementById('glow-circle')
const sparklerNotLit = document.getElementById('sparkler-not-lit')
const sparklerJustLit = document.getElementById('sparkler-just-lit')
const sparklerFullyLit = document.getElementById('sparkler-fully-lit')
let audio = null

function handleCandleLighting() {
    audio = new Audio('./audio/match.wav')
    audio.play()
    candleNotLit.classList.toggle('hidden')
    candle.classList.toggle('hidden')
    setTimeout(() => {
    glowCircle.classList.toggle('hidden')
    }, 250)
}

candleNotLit.addEventListener('click', handleCandleLighting)
candleNotLit.addEventListener('keypress', handleCandleLighting)

function handleCandleExtinguishing() {
    audio.pause()
    audio = new Audio('./audio/blow.wav')
    audio.play()
    candleNotLit.classList.toggle('hidden')
    candle.classList.toggle('hidden')
    glowCircle.classList.toggle('hidden')
}

candle.addEventListener('click', handleCandleExtinguishing)
candle.addEventListener('keypress', handleCandleExtinguishing)

function handleSparklerLighting() {
    audio = new Audio('./audio/sparkler.wav')
    audio.play()
    sparklerNotLit.classList.add('hidden')
    sparklerJustLit.classList.remove('hidden')
    setTimeout(() => {
    sparklerJustLit.classList.add('hidden')
    sparklerFullyLit.classList.remove('hidden')
    }, 250)
}

sparklerNotLit.addEventListener('click', handleSparklerLighting)
sparklerNotLit.addEventListener('keypress', handleSparklerLighting)

function handleSparklerExtinguishing() {
    audio.pause()
    sparklerFullyLit.classList.add('hidden')
    sparklerNotLit.classList.remove('hidden')
}

sparklerFullyLit.addEventListener('click', handleSparklerExtinguishing)
sparklerFullyLit.addEventListener('keypress', handleSparklerExtinguishing)

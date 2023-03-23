const cloudEls = document.getElementsByClassName('cloud')
const textBoxEl = document.getElementById('text-box')
const leftRainbow = document.getElementById('left-rainbow')
const titleEl = document.getElementById('title')
const rightRainbow = document.getElementById('right-rainbow')
Array.from(cloudEls).forEach(cloudEl => {
    cloudEl.addEventListener('click', () => {
    cloudEl.style.backgroundImage = "url('./images/rainbow/rainbow1.png')"
    })
})

textBoxEl.addEventListener('click', () => {
    leftRainbow.classList.toggle('hidden')
})
titleEl.addEventListener('click', () => {
    rightRainbow.classList.toggle('hidden')
})
// Adapted from https://www.kirupa.com/html5/the_falling_snow_effect.htm
// Array to store our Raindrop objects
var raindrops = [];

// Global variables to store our browser's window size
var browserWidth;
var browserHeight;

// Specify the number of raindrops you want visible
var numberOfRaindrops = 50;

// Flag to reset the position of the raindrops
var resetPosition = false;

// Handle accessibility
var enableAnimations = false;
var reduceMotionQuery = matchMedia("(prefers-reduced-motion)");

// Handle animation accessibility preferences
function setAccessibilityState() {
if (reduceMotionQuery.matches) {
    enableAnimations = false
} else {
    enableAnimations = true
}
}
setAccessibilityState()

reduceMotionQuery.addListener(setAccessibilityState)

//
// It all starts here...
//
function setup() {
if (enableAnimations) {
    window.addEventListener("DOMContentLoaded", generateRaindrops, false)
    window.addEventListener("resize", setResetFlag, false)
} else  {
    const shakingElements = document.getElementsByClassName('shake')
    Array.from(shakingElements).forEach(el => {
    el.classList.remove('shake')
    })
}
}
setup();

//
// Constructor for our Raindrop object
//
function Raindrop(element, speed, xPos, yPos) {
// set initial raindrop properties
this.element = element;
this.speed = speed;
this.xPos = xPos;
this.yPos = yPos;
this.scale = 1;
this.flipped = Math.floor(Math.random() * 2) === 1

// declare variables used for raindrop's motion
this.counter = 0;
this.sign = Math.random() < 0.5 ? 1 : -1

// setting an initial opacity and size for our raindrop
this.element.style.opacity = (.1 + Math.random()) /1.5
}

//
// The function responsible for actually moving our raindrop
//
Raindrop.prototype.update = function () {
// using some trigonometry to determine our x and y position
this.counter += this.speed / 5000
this.xPos += this.sign * this.speed * Math.cos(this.counter) / 120 // 40 was original denominator
this.yPos += Math.sin(this.counter) / 40 + this.speed / 30
this.scale = .55 + Math.abs(10 * Math.cos(this.counter) / 20)

// setting our raindrop's position
setTransform(Math.round(this.xPos), Math.round(this.yPos), this.scale, this.element, this.flipped)

// if raindrop goes below the browser window, move it back to the top
if (this.yPos > browserHeight) {
    this.yPos = -50
}
}

//
// A performant way to set a raindrop's position and size
//
function setTransform(xPos, yPos, scale, el, isFlipped) {
if (isFlipped) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0) scale(${scale}, ${scale}) rotateY(150deg)`
} else {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0) scale(${scale}, ${scale})`
}
}

//
// The function responsible for creating the raindrop
//
function generateRaindrops() {

// get our raindrop element from the DOM and store it
var originalRaindrop = document.querySelector(".raindrop")

// access our raindrop element's parent container
var raindropContainer = originalRaindrop.parentNode
raindropContainer.style.display = "block"

// get our browser's size
browserWidth = document.documentElement.clientWidth
browserHeight = document.documentElement.clientHeight

// create each individual raindrop
for (let i = 0; i < numberOfRaindrops; i++) {

    // clone our original raindrop and add it to raindropContainer
    const raindropClone = originalRaindrop.cloneNode(true)
    raindropContainer.appendChild(raindropClone)

    // set our raindrop's initial position and related properties
    var initialXPos = getPosition(50, browserWidth)
    var initialYPos = getPosition(50, browserHeight)
    var speed = 5 + Math.random() * 300 // 140 was the original multiplier

    // create our raindrop object
    var raindropObject = new Raindrop(raindropClone,
    speed,
    initialXPos,
    initialYPos)
    raindrops.push(raindropObject)
}

// remove the original raindrop because we no longer need it visible
raindropContainer.removeChild(originalRaindrop)

moveRaindrops()
}

//
// Responsible for moving each raindrop by calling its update function
//
function moveRaindrops() {

if (enableAnimations) {
    for (let i = 0; i < raindrops.length; i++) {
    const raindrop = raindrops[i]
    raindrop.update()
    }
}

// Reset the position of all the raindrops to a new value
if (resetPosition) {
    browserWidth = document.documentElement.clientWidth
    browserHeight = document.documentElement.clientHeight

    for (var i = 0; i < raindrops.length; i++) {
    var raindrop = raindrops[i]

    raindrop.xPos = getPosition(50, browserWidth)
    raindrop.yPos = getPosition(50, browserHeight)
    }

    resetPosition = false;
}

requestAnimationFrame(moveRaindrops);
}

//
// This function returns a number between (maximum - offset) and (maximum + offset)
//
function getPosition(offset, size) {
return Math.round(-1 * offset + Math.random() * (size + 2 * offset))
}

//
// Trigger a reset of all the Raindrops' positions
//
function setResetFlag(e) {
resetPosition = true
}
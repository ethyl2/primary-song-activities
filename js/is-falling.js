const fallingItems = [
    {
      name: 'Rain is',
      imgUrl: './images/rain/raindrop.png'
    },
    {
      name: 'Snow is',
      imgUrl: './images/rain/snowflake.png'
    },
    {
      name: 'Toast is',
      imgUrl: './images/rain/toast.png'
    },
    {
      name: `Money's`,
      imgUrl: './images/rain/money.png'
    },
    {
      name: 'Frogs are',
      imgUrl: [
        './images/rain/frog1.png',
        './images/rain/frog2.png',
        './images/rain/frog3.png',
      ]
    },
    {
      name: 'Cheese is',
      imgUrl: './images/rain/cheese.png'
    },
    {
      name: 'Slime is',
      imgUrl: './images/rain/slime.png'
    },
    {
      name: `Confetti's`,
      imgUrl: [
        './images/rain/confetti1.png',
        './images/rain/confetti2.png',
        './images/rain/confetti3.png',
        './images/rain/confetti4.png',
        './images/rain/confetti5.png',
        './images/rain/confetti6.png',
        './images/rain/confetti7.png',
        './images/rain/confetti8.png'
      ]
    },
    {
      name: 'Love is',
      imgUrl: './images/rain/love.png'
    },
    {
      name: 'Leaves are',
      imgUrl: [
        './images/rain/leaf1.png',
        './images/rain/leaf2.png',
        './images/rain/leaf3.png',
        './images/rain/leaf4.png',
        './images/rain/leaf5.png',
        './images/rain/leaf6.png'
      ]
    }
]

const changeButton = document.getElementById('change-button')
const itemTextEls = document.querySelectorAll('.item')
const birthdayMessage = document.getElementById('birthday')

let itemIndex = 0
changeButton.addEventListener('click', () => {
itemIndex = (itemIndex + 1) % fallingItems.length

if (itemIndex === 6 || itemIndex === 7) {
    birthdayMessage.classList.remove('hidden')
    birthdayMessage.classList.add('block')
} else {
    birthdayMessage.classList.remove('block')
    birthdayMessage.classList.add('hidden')
}
const snowflakeEls = document.querySelectorAll('.snowflake')
snowflakeEls.forEach(snowflakeEl => {
    if (typeof fallingItems[itemIndex].imgUrl === 'object') {
    const imgIndex = Math.floor(Math.random() * fallingItems[itemIndex].imgUrl.length)
    snowflakeEl.style.backgroundImage = `url("${fallingItems[itemIndex].imgUrl[imgIndex]}")`
    } else {
    snowflakeEl.style.backgroundImage = `url("${fallingItems[itemIndex].imgUrl}")`
    }
})
itemTextEls.forEach(itemTextEl => {
    itemTextEl.textContent = fallingItems[itemIndex].name
})
})

// Adapted from https://www.kirupa.com/html5/the_falling_snow_effect.htm
// Array to store our Snowflake objects
var snowflakes = [];

// Global variables to store our browser's window size
var browserWidth;
var browserHeight;

// Specify the number of snowflakes you want visible
var numberOfSnowflakes = 100;

// Flag to reset the position of the snowflakes
var resetPosition = false;

// Handle accessibility
var enableAnimations = false;
var reduceMotionQuery = matchMedia("(prefers-reduced-motion)");

// Handle animation accessibility preferences
function setAccessibilityState() {
    if (reduceMotionQuery.matches) {
    enableAnimations = false;
    } else {
    enableAnimations = true;
    }
}
setAccessibilityState();

reduceMotionQuery.addListener(setAccessibilityState);

//
// It all starts here...
//
function setup() {
    if (enableAnimations) {
    window.addEventListener("DOMContentLoaded", generateSnowflakes, false);
    window.addEventListener("resize", setResetFlag, false);
    }
}
setup();

//
// Constructor for our Snowflake object
//
function Snowflake(element, speed, xPos, yPos) {
    // set initial snowflake properties
    this.element = element;
    this.speed = speed;
    this.xPos = xPos;
    this.yPos = yPos;
    this.scale = 1;
    this.flipped = Math.floor(Math.random() * 2) === 1

    // declare variables used for snowflake's motion
    this.counter = 0;
    this.sign = Math.random() < 0.5 ? 1 : -1;

    // setting an initial opacity and size for our snowflake
    // this.element.style.opacity = (.1 + Math.random()) / 3;
}

//
// The function responsible for actually moving our snowflake
//
Snowflake.prototype.update = function () {
    // using some trigonometry to determine our x and y position
    this.counter += this.speed / 5000;
    this.xPos += this.sign * this.speed * Math.cos(this.counter) / 40;
    this.yPos += Math.sin(this.counter) / 40 + this.speed / 30;
    this.scale = .55 + Math.abs(10 * Math.cos(this.counter) / 20);

    // setting our snowflake's position
    setTransform(Math.round(this.xPos), Math.round(this.yPos), this.scale, this.element, this.flipped);

    // if snowflake goes below the browser window, move it back to the top
    if (this.yPos > browserHeight) {
    this.yPos = -50;
    }
}

//
// A performant way to set your snowflake's position and size
//
function setTransform(xPos, yPos, scale, el, isFlipped) {
    if (isFlipped) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0) scale(${scale}, ${scale}) rotateY(150deg)`;
    } else {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0) scale(${scale}, ${scale})`;
    }
}

//
// The function responsible for creating the snowflake
//
function generateSnowflakes() {

    // get our snowflake element from the DOM and store it
    var originalSnowflake = document.querySelector(".snowflake");

    // access our snowflake element's parent container
    var snowflakeContainer = originalSnowflake.parentNode;
    snowflakeContainer.style.display = "block";

    // get our browser's size
    browserWidth = document.documentElement.clientWidth;
    browserHeight = document.documentElement.clientHeight;

    // create each individual snowflake
    for (var i = 0; i < numberOfSnowflakes; i++) {

    // clone our original snowflake and add it to snowflakeContainer
    var snowflakeClone = originalSnowflake.cloneNode(true);
    snowflakeContainer.appendChild(snowflakeClone);

    // set our snowflake's initial position and related properties
    var initialXPos = getPosition(50, browserWidth);
    var initialYPos = getPosition(50, browserHeight);
    var speed = 5 + Math.random() * 140;

    // create our Snowflake object
    var snowflakeObject = new Snowflake(snowflakeClone,
        speed,
        initialXPos,
        initialYPos);
    snowflakes.push(snowflakeObject);
    }

    // remove the original snowflake because we no longer need it visible
    snowflakeContainer.removeChild(originalSnowflake);

    moveSnowflakes();
}

//
// Responsible for moving each snowflake by calling its update function
//
function moveSnowflakes() {

    if (enableAnimations) {
    for (var i = 0; i < snowflakes.length; i++) {
        var snowflake = snowflakes[i];
        snowflake.update();
    }
    }

    // Reset the position of all the snowflakes to a new value
    if (resetPosition) {
    browserWidth = document.documentElement.clientWidth;
    browserHeight = document.documentElement.clientHeight;

    for (var i = 0; i < snowflakes.length; i++) {
        var snowflake = snowflakes[i];

        snowflake.xPos = getPosition(50, browserWidth);
        snowflake.yPos = getPosition(50, browserHeight);
    }

    resetPosition = false;
    }

    requestAnimationFrame(moveSnowflakes);
}

//
// This function returns a number between (maximum - offset) and (maximum + offset)
//
function getPosition(offset, size) {
    return Math.round(-1 * offset + Math.random() * (size + 2 * offset));
}

//
// Trigger a reset of all the snowflakes' positions
//
function setResetFlag(e) {
    resetPosition = true;
}
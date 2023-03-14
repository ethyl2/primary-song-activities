const bibleEl = document.getElementById('bible')
const scriptureEls = document.getElementsByClassName('scripture')
bibleEl.addEventListener('click', toggleScripture)
bibleEl.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
    toggleScripture()
    }
})

function toggleScripture() {
    Array.from(scriptureEls).forEach(el => {
        el.classList.toggle('hidden')
    })
}
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


function setup() {
    if (!enableAnimations) {
    bibleEl.classList.remove('grow')
    }
}
setup();
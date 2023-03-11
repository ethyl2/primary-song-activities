// The items to press and hold on
let items = document.querySelectorAll(".item");

let timerID;
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;
let counter6 = 0;

// Listening for the mouse and touch events
Array.from(items).forEach( item => {
    // mouse events
    item.addEventListener("mousedown", pressingDown, {passive: true});
    item.addEventListener("mouseup", notPressingDown, {passive: true});
    item.addEventListener("mouseleave", notPressingDown, {passive: true});

    // touch events
    item.addEventListener("touchstart", pressingDown, {passive: true});
    item.addEventListener("touchend", notPressingDown, {passive: true});
})

function pressingDown(e) {
    e.target.classList.remove('z-10')
    e.target.classList.add('z-30')
    // Start the timer
    requestAnimationFrame(function() {
        switch(e.target.id) {
            case 'item1':
                timer1()
                break
            case 'item2':
                timer2()
                break
            case 'item3':
                timer3()
                break
            case 'item4':
                timer4()
                break
            case 'item5':
                timer5()
                break
            case 'item6':
                timer6()
                break
            default:
                console.error('unknown id')
        }
    });

    // e.preventDefault();
    }

function notPressingDown(e) {
    e.target.classList.remove('z-30')
    e.target.classList.add('z-10')
    // Stop the timer
    cancelAnimationFrame(timerID);
}

const item1 = document.getElementById('item1')
const item2 = document.getElementById('item2')
const item3 = document.getElementById('item3')
const item4 = document.getElementById('item4')
const item5 = document.getElementById('item5')
const item6 = document.getElementById('item6')

//
// Run at 60fps when you are pressing down
//

// TODO: Consolidate these into just one function once I figure out how to pass a parameter to a timer()
function timer1() {
    timerID = requestAnimationFrame(timer1)
    counter1++
   item1.style.setProperty("--scale-value", 1 + counter1 / 50)
}

function timer2() {
    timerID = requestAnimationFrame(timer2)
    counter2++
    item2.style.setProperty("--scale-value", 1 + counter2 / 50)

}

function timer3() {
    timerID = requestAnimationFrame(timer3)
    counter3++
    item3.style.setProperty("--scale-value", 1 + counter3 / 50)
}

function timer4() {
    timerID = requestAnimationFrame(timer4)
    counter4++
    item4.style.setProperty("--scale-value", 1 + counter4 / 50)
}

function timer5() {
    timerID = requestAnimationFrame(timer5)
    counter5++
    item5.style.setProperty("--scale-value", 1 + counter5 / 50)
}

function timer6() {
    timerID = requestAnimationFrame(timer6)
    counter6++
    item6.style.setProperty("--scale-value", 1 + counter6 / 50)
}
const title = document.getElementById('title');
const lightTop = document.getElementById('lightTop');
const startBtn = document.getElementById('start-tag-container');

// parallax
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

window.addEventListener('scroll', function() {
    var value = window.scrollY;
    // console.log(value);

    if (value < 500) {
        title.style.top = 200-value + "px";
    }
})


// start button
startBtn.addEventListener('click', function() {
    startBtn.style.height = "0%";
    startBtn.style.opacity = "0";
})


// interval pour le fond de la section presentation
var x = setInterval(() => {
    
}, 500);
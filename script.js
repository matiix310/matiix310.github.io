const title = document.getElementById('title');
const lightTop = document.getElementById('lightTop');

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


// 350px => text caché totalement

// 550px
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
const presSection = document.getElementById('presentation');
const meteorBig = '<svg id="meteorINDEX" class="meteor-big" style="left:Xpos;top:Ypos;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 1080" style="enable-background:new 0 0 1920 1080;" xml:space="preserve"><path d="M600.5,294.5c0,0,700.89,220.11,657.45,301.21C1214.5,676.8,600.5,294.5,600.5,294.5z"/></svg>';

var index = 0;
var x = setInterval(() => {
    var tempIndex = index;
    index = index+1;
    let x = Math.round(Math.random()*window.innerWidth)-100;
    let y = Math.round(Math.random()*window.innerHeight)-100;
    let moveX = Math.round(window.innerWidth)+100;
    let moveY = Math.round(window.innerHeight)+100;
    presSection.innerHTML = meteorBig.replace('Xpos', x).replace('Ypos', y).replace('INDEX', tempIndex) + presSection.innerHTML;
    setTimeout(() => {
        document.getElementById('meteor'+tempIndex).classList.add('svg-complete');
    }, 100);
    setTimeout(() => {
        document.getElementById('meteor'+tempIndex).style.fill = "yellow";
    }, 1000);
    setTimeout(() => {
        document.getElementById('meteor'+tempIndex).style.transform = 'translate('+moveX+'px, '+moveY+'px)';
    }, 1300);

    setTimeout(() => {
        document.getElementById('meteor'+tempIndex).remove()
    }, 3000);
}, 1000);
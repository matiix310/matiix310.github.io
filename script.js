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
const meteorBig = '<svg id="meteorINDEX" class="meteor-big meteor" style="left:Xpos;top:Ypos;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 1080" style="enable-background:new 0 0 1920 1080;" xml:space="preserve"><path d="M600.5,294.5c0,0,700.89,220.11,657.45,301.21C1214.5,676.8,600.5,294.5,600.5,294.5z"/></svg>';
const meteorMid = '<svg id="meteorINDEX" class="meteor-mid meteor" style="left:Xpos;top:Ypos;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 1080" style="enable-background:new 0 0 1920 1080;" xml:space="preserve"><path d="M1145.5,305.5c0,0,372.01,157.21,357,196C1490.5,532.5,1145.5,305.5,1145.5,305.5z"/></svg>';
const meteorSmall = '<svg id="meteorINDEX" class="meteor-small meteor" style="left:Xpos;top:Ypos;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 1080" style="enable-background:new 0 0 1920 1080;" xml:space="preserve"><path d="M433.45,363.3c0,0,275.87,173.26,256.05,205.2C671.5,597.5,433.45,363.3,433.45,363.3z"/></svg>';

var index = 0;
var x = setInterval(() => {
    index = index+1;
    var tempIndex = index;
    let meteor;

    // taille de la météorite
    let size = Math.round(Math.random()*2);
    switch (size) {
        case 0:
            meteor = meteorBig;
            break;
        case 1:
            meteor = meteorMid;
            break;
        case 2:
            meteor = meteorSmall;
            break;
        default:
            meteor = meteorBig;
    }

    console.log(size);

    let x = Math.round(Math.random()*window.innerWidth)-100;
    let y = Math.round(Math.random()*window.innerHeight)-100;
    presSection.insertAdjacentHTML( 'beforeend', meteor.replace('Xpos', x).replace('Ypos', y).replace('INDEX', tempIndex));


    setTimeout(() => {
        document.getElementById('meteor'+tempIndex).remove()
    }, 2500);
}, 1000);

const star1 = '<path class="st1" d="M753.35,817.23l9.85,51.72c0.18,0.93,0.92,1.64,1.85,1.78l42.87,6.35c2.33,0.35,2.59,3.61,0.34,4.31l-40.64,12.75c-0.7,0.22-1.25,0.78-1.46,1.49l-12.46,41.96c-0.63,2.14-3.67,2.11-4.27-0.04l-11.58-41.76c-0.22-0.79-0.86-1.4-1.67-1.58l-44.33-9.67c-2.3-0.5-2.34-3.76-0.06-4.32l42.41-10.4c0.79-0.19,1.42-0.81,1.62-1.6l13.19-51.12C749.62,814.8,752.91,814.9,753.35,817.23z"/>'
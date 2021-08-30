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
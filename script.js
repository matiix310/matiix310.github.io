const title = document.getElementById('title');
const lightTop = document.getElementById('lightTop');
const startBtn = document.getElementById('start-tag-container');
const controllerContainer = document.getElementById('controller');
const cardContainer = document.getElementById('cardContainer');
const cardFrame = document.getElementById('card');
const projectFrame = document.getElementById('projectFrame');

// parallax
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

window.addEventListener('scroll', function() {
    var value = window.scrollY;

    if (value < 500) {
        title.style.top = 200-value + "px";
    }
})


// start button
startBtn.addEventListener('click', function() {
    startBtn.style.height = "0%";
    startBtn.style.opacity = "0";
    projectFrame.classList.add('active');
})


// interval pour le fond de la section presentation
const presSection = document.getElementById('presentation');
const meteorBig = '<svg id="meteorINDEX" class="meteor-big meteor" style="left:Xpos;top:Ypos;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 1080" style="enable-background:new 0 0 1920 1080;" xml:space="preserve"><path d="M600.5,294.5c0,0,700.89,220.11,657.45,301.21C1214.5,676.8,600.5,294.5,600.5,294.5z"/></svg>';
const meteorMid = '<svg id="meteorINDEX" class="meteor-mid meteor" style="left:Xpos;top:Ypos;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 1080" style="enable-background:new 0 0 1920 1080;" xml:space="preserve"><path d="M1228.5,213.5c0,0,372.01,157.21,357,196C1573.5,440.5,1228.5,213.5,1228.5,213.5z"/></svg>';
const meteorSmall = '<svg id="meteorINDEX" class="meteor-small meteor" style="left:Xpos;top:Ypos;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 1080" style="enable-background:new 0 0 1920 1080;" xml:space="preserve"><path d="M433.45,363.3c0,0,275.87,173.26,256.05,205.2C671.5,597.5,433.45,363.3,433.45,363.3z"/></svg>';

var meteorIndex = 0;
var x = setInterval(() => {
    meteorIndex = meteorIndex+1;
    var tempIndex = meteorIndex;
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

    let x = Math.round(Math.random()*window.innerWidth)-100;
    let y = Math.round(Math.random()*window.innerHeight)-100;
    presSection.insertAdjacentHTML( 'afterbegin', meteor.replace('Xpos', x).replace('Ypos', y).replace('INDEX', tempIndex));


    setTimeout(() => {
        document.getElementById('meteor'+tempIndex).remove()
    }, 2500);
}, 1000);

const star1 = '<svg id="starINDEX" class="star1 star" style="left:Xpos;top:Ypos;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 1080" style="enable-background:new 0 0 1920 1080;" xml:space="preserve"><path d="M983.56,128.36l67.52,354.49c1.21,6.36,6.31,11.25,12.71,12.2l293.85,43.53c15.98,2.37,17.74,24.72,2.32,29.56l-278.58,87.4c-4.83,1.51-8.59,5.33-10.03,10.18L985.95,953.3c-4.35,14.64-25.16,14.45-29.24-0.27L877.36,666.8c-1.51-5.44-5.9-9.59-11.41-10.8l-303.86-66.3c-15.75-3.44-16.04-25.79-0.38-29.63l290.67-71.3c5.44-1.33,9.7-5.55,11.1-10.97l90.43-350.4C957.95,111.69,980.53,112.41,983.56,128.36z"/></svg>';
const star2 = '<svg id="starINDEX" class="star2 star" style="left:Xpos;top:Ypos;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 1080" style="enable-background:new 0 0 1920 1080;" xml:space="preserve"><path d="M986.2,147.81l87.71,306.98c1.9,6.65,7.06,11.88,13.69,13.87l264.93,79.48c18.99,5.7,19.39,32.44,0.59,38.71l-292.51,97.5c-6.6,2.2-11.62,7.63-13.29,14.38l-57.63,232.91c-5.14,20.78-34.78,20.49-39.51-0.39l-52.41-231.09c-1.71-7.53-7.53-13.43-15.04-15.25l-314.37-75.88c-19.45-4.69-21.1-31.72-2.36-38.75l252.87-94.83c5.53-2.07,9.88-6.45,11.92-11.99l116.83-317.11C954.42,127.94,980.81,128.93,986.2,147.81z"/></svg>';
const star3 = '<svg id="starINDEX" class="star3 star" style="left:Xpos;top:Ypos;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 1080" style="enable-background:new 0 0 1920 1080;" xml:space="preserve"><path d="M984.2,111.13l58.71,369.9c1.07,6.74,6.41,12,13.17,12.97l324.01,46.29c16.77,2.4,18.19,26.06,1.83,30.44l-327.81,87.81c-5.75,1.54-10.12,6.22-11.25,12.07l-58.19,299.66c-3.17,16.33-26.3,16.97-30.37,0.84l-75.85-300.49c-1.47-5.84-6.18-10.3-12.09-11.46l-327.33-64.3c-16.58-3.26-16.82-26.88-0.32-30.48l320.28-69.88c5.93-1.29,10.56-5.91,11.88-11.83l82.77-372.47C957.36,93.42,981.5,94.16,984.2,111.13z"/></svg>';

var starIndex = 0;
var x = setInterval(() => {
    starIndex = starIndex+1;
    var tempIndex = starIndex;
    let star;

    // taille de la météorite
    let type = Math.round(Math.random()*2);
    switch (type) {
        case 0:
            star = star1;
            break;
        case 1:
            star = star2;
            break;
        case 2:
            star = star3;
            break;
        default:
            star = star1;
    }

    let x = Math.round(Math.random()*window.innerWidth)-100;
    let y = Math.round(Math.random()*window.innerHeight)-100;
    presSection.insertAdjacentHTML( 'afterbegin', star.replace('Xpos', x).replace('Ypos', y).replace('INDEX', tempIndex));


    setTimeout(() => {
        document.getElementById('star'+tempIndex).remove()
    }, 5100);
}, 2000);

let controllers = controllerContainer.children;

let cardIndex = 0;
controllers[cardIndex].classList.add('active');

for (let i = 0; i<controllers.length; i++) {
    let child = controllers[i]
    child.addEventListener('click', function() {
        switchCard(i)
    })
}

function switchCard(index) {
    if (cardIndex === index) return;
    setActiveController(index)

    if (index > cardIndex) cardFrame.style.transform = "translate(-50%, -50%)rotate(-30deg)";
    else cardFrame.style.transform = "translate(-50%, -50%)rotate(30deg)";

    // move card to selected one
    setTimeout(() => {
        cardContainer.style.transform = "translateX(-"+(window.innerWidth*35/100*index)+"px)"        
    }, 300);
    setTimeout(() => {
        cardFrame.style.transform = "translate(-50%, -50%)rotate(0deg)";
    }, 600);

    cardIndex = index;
}

function setActiveController(index) {
    for (let i=0; i<controllers.length; i++) {
        if (i === index) {
            controllers[index].classList.add('active');
        }
        else controllers[i].classList.remove('active')
    }
}
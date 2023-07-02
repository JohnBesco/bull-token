const wrapper = document.getElementById('overlay');
const buttons = document.getElementsByClassName('menu-btn');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    wrapper.classList.toggle("hidden");
  });
}

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.dropdown-menu');
    const options = dropdown.querySelectorAll('.dropdown-menu a');
    const selected = dropdown.querySelector('.selected')

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});

gsap.from('.bounce', { duration: 1, y: '-200px', ease: 'bounce'});

gsap.from('.header-item', { duration: 1, opacity: 0, stagger: 0.5 });

gsap.from('.background-graphic1', {duration: 2.5, y:'-100vh', delay: 0, ease: "slow(0.7, 0.7, false)"});

gsap.from('.background-graphic2', {duration: 2.5, x:'-100vw', delay: 0, ease: "slow(0.7, 0.7, false)"});

gsap.from('#about-us-img', { duration: 1, y: '-100vh', ease: 'bounce'});

gsap.from('.hero-item', { duration: 2, x: '100vw', delay: 1.5, stagger: 0.5, ease: "elastic.out(1, 0.5)"});

const tl = gsap.timeline({defaults: {duration: 0.75}});

tl.fromTo('.float', {y: -30}, {y: 0, yoyo: true, repeat: -1});

gsap.from('.rotate-in', {rotation: -360, x: '-100vw', duration: 1, delay: 1, stagger: 0.35});

gsap.from('.enter-in-right', { duration: 2, x: '100vw', delay: 1.5, ease: "expo.out"});

gsap.from('.enter-in-left', { duration: 2, x: '-100vw', delay: 1.5, ease: "expo.out"});

console.clear();

const mainImg = document.querySelectorAll(".main-img-wrapper > img:nth-child(-n+3)");

const randomX = random(10, 20);
const randomY = random(20, 30);
const randomDelay = random(0, 1);
const randomTime = random(3, 5);
const randomTime2 = random(5, 10);
const randomAngle = random(8, 12);

TweenLite.set(mainImg, {
  x: randomX(-1),
  y: randomX(1),
  delay: 1,
  rotation: randomAngle(-1)

});

moveX(mainImg, 1);
moveY(mainImg, -1);
rotate(mainImg, 1);

function rotate(target, direction) {
  
  TweenLite.to(target, randomTime2(), {
    rotation: randomAngle(direction),
    // delay: randomDelay(),
    ease: Sine.easeInOut,
    onComplete: rotate,
    onCompleteParams: [target, direction * -1]
  });
}

function moveX(target, direction) {
  
  TweenLite.to(target, randomTime(), {
    x: randomX(direction),
    ease: Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1]
  });
}

function moveY(target, direction) {
  
  TweenLite.to(target, randomTime(), {
    y: randomY(direction),
    ease: Sine.easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1]
  });
}

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}
const wrapper = document.getElementById('overlay');
const buttons = document.getElementsByClassName('menu-btn');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    wrapper.classList.toggle("hidden");
  });
}

const bannerContainer = document.getElementById('banner-container');
const bannerItems = bannerContainer.innerHTML;

function scrollBanner() {
  const scrollSpeed = 1; // Adjust this value to control the scroll speed
  const scrollAmount = bannerContainer.scrollLeft + scrollSpeed;

  bannerContainer.scrollLeft = scrollAmount;

  if (scrollAmount >= bannerContainer.scrollWidth - bannerContainer.clientWidth) {
    bannerContainer.innerHTML += bannerItems;
  }
}

setInterval(scrollBanner, 30); // Adjust the interval time as per preference


const tween = KUTE.fromTo(
  '#blob1',
  { path: '#blob1' },
  { path: '#blob2' },
  { repeat: 999, duration: 3000, yoyo: true }
).start();

gsap.from('.bounce', { duration: 1, y: '-200px', ease: 'bounce'});

gsap.from('.header-item', { duration: 1, opacity: 0, stagger: 0.5 });

gsap.from('.hero-item', { duration: 2, x: '-100vw', delay: 1, stagger: 0.5, ease: "elastic.out(1, 0.5)"});

gsap.from('.hero-graphic1', {rotation: -360, x: '100vw', duration: 1, delay: 2});

gsap.from('.hero-graphic2', {rotation: -360, x: '100vw', duration: 1, delay: 2});

gsap.from('.banner', {duration: 2, y:'100vh', delay: 2, ease: "back.out(2)"});


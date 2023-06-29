const wrapper = document.getElementById('overlay');
const buttons = document.getElementsByClassName('menu-btn');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    wrapper.classList.toggle("hidden");
  });
}

// Clone the banner items and append them to create the infinite scroll effect
const bannerContainer = document.getElementById('banner-container');
const bannerItems = bannerContainer.innerHTML;

bannerContainer.innerHTML += bannerItems;

// Scroll the banner container to the right continuously
const scrollSpeed = 1; // Adjust this value to control the scroll speed
let scrollAmount = 0;

function scrollBanner() {
  scrollAmount += scrollSpeed;

  bannerContainer.scrollLeft = scrollAmount;

  if (scrollAmount >= bannerContainer.scrollWidth / 2) {
    scrollAmount = 0;
  }
}

setInterval(scrollBanner, 30); // Adjust the interval time as per your preference

const tween = KUTE.fromTo(
  '#blob1',
  { path: '#blob1' },
  { path: '#blob2' },
  { repeat: 999, duration: 3000, yoyo: true }
).start();

gsap.from('.header', { duration: 1, y: '-200px', ease: 'bounce'});

gsap.from('.header-item', { duration: 1, opacity: 0, stagger: 0.5 });


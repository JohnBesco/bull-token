const wrapper = document.getElementById('overlay');
const buttons = document.getElementsByClassName('menu-btn');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    wrapper.classList.toggle("hidden");
  });
}

gsap.from('.bounce', { duration: 1, y: '-200px', ease: 'bounce'});

gsap.from('.header-item', { duration: 1, opacity: 0, stagger: 0.5 });

gsap.from('.background-graphic1', {duration: 2.5, y:'-100vh', delay: 0, ease: "slow(0.7, 0.7, false)"});

gsap.from('.background-graphic2', {duration: 2.5, x:'-100vw', delay: 0, ease: "slow(0.7, 0.7, false)"});
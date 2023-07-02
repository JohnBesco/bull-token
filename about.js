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

gsap.from('#about-us-img', {rotation: -360, x: '-100vw', duration: 1, delay: 1});

gsap.from('.hero-item', { duration: 2, x: '100vw', delay: 1.5, stagger: 0.5, ease: "elastic.out(1, 0.5)"});
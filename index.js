const wrapper = document.getElementById('overlay');
const buttons = document.getElementsByClassName('menu-btn');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    wrapper.classList.toggle("hidden");
  });
}
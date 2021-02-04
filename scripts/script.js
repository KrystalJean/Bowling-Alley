const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.container');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})
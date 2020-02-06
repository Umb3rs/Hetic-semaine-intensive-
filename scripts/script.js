const hamburgerBtn = document.querySelector('.hamburger')
const menuresponsive = document.querySelector('.menuresponsive')

hamburgerBtn.addEventListener('click', () => {
  menuresponsive.classList.toggle("invisible")
})

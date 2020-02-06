var price = document.querySelector('.infos-price-full');
var info = document.querySelector('.infos-care');
var buttonWhite = document.querySelector('.buttonround')
var buttonBlack = document.querySelector('.buttonround2')
var toothbrushWhite = document.querySelector('.toothbrushWhite')
var toothbrushBlack = document.querySelector('.toothbrushBlack')


info.addEventListener('click', function () {
  if (price.innerHTML == '349,00 €') {
      price.innerHTML = '299,00 €'
  } else {
    price.innerHTML = '349,00 €'
  }
  info.classList.toggle('click')
})

buttonWhite.addEventListener('click', function() {
  toothbrushWhite.style = 'display: none'
  toothbrushBlack.style = 'display: block'
})

buttonBlack.addEventListener('click', function() {
  toothbrushWhite.style = 'display: block'
  toothbrushBlack.style = 'display: none'
})

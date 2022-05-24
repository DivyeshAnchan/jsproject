let count = 0
const value = document.querySelector('#value')
const butt = document.querySelectorAll('.btn')

butt.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const a = e.currentTarget.classList
    if (a.contains('decrease')) {
      count--
    } else if (a.contains('increase')) {
      count++
    } else {
      count = 0
    }
    if (count > 0) {
      value.style.color = 'blue'
    }
    if (count < 0) {
      value.style.color = 'brown'
    }
    if (count == 0) {
      value.style.color = 'violet'
    }
    value.textContent = count
  })
})

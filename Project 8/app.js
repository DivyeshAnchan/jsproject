//using selectors inside the element
const btns = document.querySelectorAll('.question')
btns.forEach(function (aa) {
  const b = aa.querySelector('.question-btn')
  b.addEventListener('click', function () {
    btns.forEach(function (bb) {
      if (bb != aa) {
        bb.classList.remove('show-text')
      }
    })
    aa.classList.toggle('show-text')
  })
})

// traversing the dom
// const btns = document.querySelectorAll('.question-btn')
// btns.forEach(function (a) {
//   a.addEventListener('click', function (e) {
//     const a = e.currentTarget.parentElement.parentElement
//     a.classList.toggle('show-text')
//   })
// })

const toggle = document.querySelector('.sidebar-toggle')
const closebtn = document.querySelector('.close-btn')
const side = document.querySelector('.sidebar')
toggle.addEventListener('click', function () {
  //   if (side.classList.contains('show-sidebar')) {
  //     side.classList.remove('show-sidebar')
  //   } else {
  //     side.classList.add('show-sidebar')
  //   }
  // })

  side.classList.toggle('show-sidebar')
})
closebtn.addEventListener('click', function () {
  side.classList.remove('show-sidebar')
})

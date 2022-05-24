// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navtog = document.querySelector('.nav-toggle')
const link = document.querySelector('.links')
navtog.addEventListener('click', function () {
  // //   if (link.classList.contains('show-links')) {
  //     link.classList.remove('show-links')
  //   } else {
  //     link.classList.add('show-links')
  //   }
  link.classList.toggle('show-links')
})

const colors = ['lightgreen', 'brown', 'rgba(133,122,200)', '#f15025']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')
btn.addEventListener('click', function () {
  const num = random()
  //console.log(num)
  document.body.style.backgroundColor = colors[num]
  color.textContent = colors[num]
})
function random() {
  return Math.floor(Math.random() * colors.length)
}

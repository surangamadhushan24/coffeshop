const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

function mouseOver() {
   document.getElementById("demo").style.color = "red";
}
function mouseOut() {
  document.getElementById("demo").style.color = "black";
  }
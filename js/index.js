const accordion = document.getElementsByClassName('container');
const title = document.getElementsByClassName
for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
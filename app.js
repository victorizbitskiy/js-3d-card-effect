const card = document.querySelector('.card')
const container = document.querySelector('.container')

const title = document.querySelector('.title')
const sneaker = document.querySelector('.sneaker img')
const description = document.querySelector('.info h3')
const sizes = document.querySelector('.sizes')
const purchase = document.querySelector('.purchase button')

container.addEventListener('mousemove', e => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

//Animate In
container.addEventListener('mouseenter', e => {
  card.style.transition = 'none'
  //Popout
  title.style.transform = 'translateZ(150px)'
  sneaker.style.transform = 'translateZ(200px) rotateZ(-45deg)'
  description.style.transform = 'translateZ(125px)'
  sizes.style.transform = 'translateZ(100px)'
  purchase.style.transform = 'translateZ(75px)'
})

//Anmate Out
container.addEventListener('mouseleave', e => {
  card.style.transition = 'all 0.5s ease'
  card.style.transform = `rotateY(0deg) rotateX(0deg)`
  //Popback
  title.style.transform = 'translateZ(0px)'
  sneaker.style.transform = 'translateZ(0) rotateZ(0deg)'
  description.style.transform = 'translateZ(0)'
  sizes.style.transform = 'translateZ(0)'
  purchase.style.transform = 'translateZ(0)'
})

let circles = document.querySelectorAll('.circle')

for(let i = 0; i < circles.length; i++){
  let aCircle = circles[i]

  let randomDelay = Math.round(Math.random() * 1000)

  aCircle.style.transitionDelay = randomDelay + "ms"
}

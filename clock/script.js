let clockEl = document.querySelector('#clock')
let secondHand = document.querySelector('#secondHand')

// run getTime once on load

getTime();

// call getTime every 1 second

setInterval(function() {
  getTime();
}, 1000);

let hourElement = document.querySelector('.hour')

let minuteElement = document.querySelector('.minute')

let secondElement = document.querySelector('.second')



// set up time getting function

function getTime(){
  hourElement.style.transform = 'rotate('+( h * 30 )+'deg)'

   minuteElement.style.transform = 'rotate('+( m * 30 )+'deg)'

    secondElement.style.transform = 'rotate('+( h * 30 )+'deg)'
}

  // get the date

  let d = new Date();

  // get hours, minutes, and seconds

  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());

  // update the clock's text

  // let timeText = h + ":" + m + ":" + s
  // clockEl.innerText = timeText

  // rotate secondHand based on the second

  secondHand.animate([{
    transform:'rotate('+ (s-1) * 6 +'deg)'
  },
  {
    transform:'rotate('+ s * 6 +'deg)'
  }],{
    duration:100,
    easing:'cubic-bezier(0.75, 0.000, 0.800, 1.5)',
    fill:'forwards'
  })

// add a zero to times below 10

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

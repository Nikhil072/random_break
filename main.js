let snd = new Audio('./assets/alarm-clock-short.mp3')

function randomAlarm() {
  let randNum = Math.ceil(Math.random() * 3600)
  console.log(randNum)
  if (randNum <= 30) {
    snd.play();
    document.body.appendChild('Beeping rn!')

  }
}

setInterval(randomAlarm, 1000)

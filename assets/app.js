const body = document.querySelector('body')
const hourHand = document.querySelector('.hour')
const minuteHand = document.querySelector('.minute')
const secodHand = document.querySelector('.seconds')
const modeSwitch = document.querySelector('.mode-switch')

if(localStorage.getItem('mode') === 'Dark Mode'){
  body.classList.add('dark')
  modeSwitch.textContent = 'Light Mode'
}


modeSwitch.addEventListener('click', ()=>{
  body.classList.toggle('dark')

  const isDarkMode = body.classList.contains('dark')
  modeSwitch.textContent = isDarkMode ? 'Light Mode': 'Dark Mode'

  localStorage.setItem('mode', isDarkMode ? 'Dark Mode': 'Light Mode')
})

const updateTime = ()=>{
  let date = new Date(),
  secToDeg = (date.getSeconds() / 60 ) * 360,
  minTodeg = (date.getMinutes() / 60 ) * 360,
  hrToDeg = (date.getHours() / 12 ) * 360

  secodHand.style.transform = `rotate(${secToDeg}deg)`;
  minuteHand.style.transform = `rotate(${minTodeg}deg)`;
  hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};

setInterval(updateTime, 1000)
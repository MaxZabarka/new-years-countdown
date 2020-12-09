secondsElement = document.getElementById('seconds__time')
minutesElement = document.getElementById('minutes__time')
hoursElement = document.getElementById('hours__time')
daysElement = document.getElementById('days__time')
let newYear = 'January 1 ' + (new Date().getFullYear() + 1) + " 00:00:00";
update()
setInterval(update,1000);

function update() {
  timeToNewYear = timeLeft()
  secondsElement.innerHTML = timeToNewYear.seconds
  minutesElement.innerHTML = timeToNewYear.minutes
  hoursElement.innerHTML = timeToNewYear.hours
  daysElement.innerHTML = timeToNewYear.days

}
function timeLeft(){
  var t = Date.parse(newYear) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
};

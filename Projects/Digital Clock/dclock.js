let clockSecond = document.getElementById('second')
let clockMinute = document.getElementById('minute')
let clockHour = document.getElementById('hour')
let clockAmPm = document.getElementById('am-pm')

setInterval(function(){
 const date = new Date();

 const options = {
    hour : '2-digit',
    minute : '2-digit',
    second : '2-digit',
    hours12 : true
 };
  const time = date.toLocaleTimeString('en-US',options) 

  const ampn = time.slice(-2)

  const [hour,minute,second] = time.slice(0,-3).split(':');
  clockHour.textContent = hour;
  clockMinute.textContent = minute;
  clockSecond.textContent = second;
  clockAmPm.textContent = ampm;
},1000)
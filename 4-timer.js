const getTime = () => {
  const now = new Date();
  const timeNewYear = new Date(2024, 11, 31, 23,59,50);
  const month = timeNewYear.getMonth() - now.getMonth()
  const day = timeNewYear.getDate() - now.getDate()
  const hours = timeNewYear.getHours() - now.getHours()
  const minutes = timeNewYear.getMinutes() - now.getMinutes()
  const seconds = timeNewYear.getSeconds() - now.getSeconds()

  return { month, day, hours, minutes, seconds };
};

// const interal = setInterval(() => {
//   const {month, day, hours, minutes, seconds} = getTime()

//   document.getElementById('month').textContent = `${month ?? '-'} Месяца,`; 
//   document.getElementById('day').textContent = `${day ?? '-'} Дней,`;
//   document.getElementById('hours').textContent = `${hours ?? '-'} Часов,`;
//   document.getElementById('minutes').textContent = `${minutes ?? '-'} Минут,`;
//   document.getElementById('seconds').textContent = `${seconds ?? '-'} Секунд`; 

//   if(month == 0 && day == 0 && hours == 0 && minutes == 0 && seconds == 0){
//     clearInterval(interal);
//     document.getElementById('newYear').textContent = 'С Новым Годом!!!'
//   }
// },1000)





   
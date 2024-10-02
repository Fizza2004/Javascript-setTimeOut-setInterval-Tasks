/*---Task1:Simple Timer with setTimeout---*/
//------------------------------------------
// Create a function that logs "Time's up!" to the console after 5 seconds using setTimeout.
// setTimeout(()=>{
//   console.log('Time is up!');
// },5000);
//------------------------------------------


/*---Task2:Countdown Timer with setInterval---*/
//------------------------------------------
// Write a function that counts down from 10 to 0 and logs each number to the console every second using setInterval. When the countdown reaches 0, display "Blast off!" and stop the interval
// let downBtn = document.querySelector('#downBtn');
// let stopBtn = document.querySelector('#stopBtn');
// downBtn.addEventListener('click',()=>{
//   let spanElement = document.querySelector('span');
//   console.log(spanElement.innerText); //00:10 will console the  initial value
//   let counter = +spanElement.innerText.slice(3,6);
//   timerId=setInterval(()=>{
//     counter--;
//     if(counter===0){
//       spanElement.innerText=`00:00`;
//       console.log(spanElement.innerText);
//       alert('Blast off!');
//       clearInterval(timerId);

//     } else{
//       spanElement.innerText=`00:${String(counter).length===1? 0:""}${counter}`;
//       console.log(spanElement.innerText);
//     }
//   },1000);
// })


//SideNOTE:
// console.log(typeof spanElement)
// console.log(typeof +spanElement.innerText) //Debug:spanElement.innerText is a string as a whole
//------------------------------------------


/*---Task 4: Cancel a Timeout---*/
// Write a function that starts a 10-second timer using setTimeout. Provide a button or a condition that can cancel the timer before it completes using clearTimeout.
//------------------------------------------
// let timerElement = document.querySelector("#timer");
// let timerCount=+timerElement.innerText.slice(3,6);
// let timerId=setTimeout(function start(){
//   timerCount++;
// //If timer reaches 10 seconds, stop it.
//   if(timerCount>10){
//     clearInterval(timerId);
//   } else{
//     timerElement.innerText = `00:${String(timerCount).length===1 ? "0":""}${timerCount}`
//     timerId = setTimeout(start,1000);
//   }
// },1000);
//------------------------------------------


/*---Task 3: Auto-refreshing Content---*/
//------------------------------------------
// Create a function that simulates fetching new data every 3 seconds. Use setInterval to log "Fetching new data..." to the console at regular intervals
// setInterval(()=>{
//   console.log("Fetching new data...");
// },3000)
//------------------------------------------
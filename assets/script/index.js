'use strict';

import {select, getElement, onEvent} from "./utilty.js";
let curntlyTIme;

function updateCurrentTime() {
  const now = new Date();
  document.getElementById('curntly-time').textContent = curntlyTIme;
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
 
  curntlyTIme=(`${hours}:${minutes}`)
  if(minutes===getElement('minute').value && hours===getElement('hour').value){
    playAlarm()
  }
}

// Update the time every second
setInterval(updateCurrentTime, 1000);

// Function to validate and set alarm
function setAlarm() {
  const hour = getElement('hour').value;
  const minute = getElement('minute').value;
  const button = document.getElementById('button');
  const feedbackElement = document.querySelector('.setting-analarm');

  // Check if hour and minute are numbers and within range
  if (!isNaN(hour) && hour >= 0 && hour < 24 && !isNaN(minute) && minute >= 0 && minute < 60) {
      // Correct values - set alarm and update UI
      feedbackElement.textContent = `Alarm set for ${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`;
      button.classList.remove('error');
      getElement('hour').value = '';
      getElement('minute').value = '';
      
  } 
   else {
      // Incorrect values - show error and update UI
      feedbackElement.textContent = 'Please add a correct value';
      button.classList.add('error');
      getElement('hour').value = '';
      getElement('minute').value = '';
  }
}
setAlarm()
// Add click event listener to the button
document.getElementById('button').addEventListener('click', setAlarm);

setInterval(updateClock, 1000);
updateClock(); // Initialize clock immediately

function playAlarm() {
  const sound = new Audio('./assets/sound/digital-alarm-beeping-slava-pogorelsky-1-00-06.mp3')
  sound.type='audio/mp3';
  sound.play();
  alarmTime = null;
}
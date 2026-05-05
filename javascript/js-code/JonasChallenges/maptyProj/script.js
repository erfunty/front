'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
// if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(function(pos){
//     console.log('ok');
//     console.log(pos);
// },function(){
//     alert('Could not get your position')
// })}
navigator.geolocation.getCurrentPosition(
  pos => {
    console.log("ok", pos);
  },
  err => {
    console.log("error", err);
  },
  {
    timeout: 5000
  }
);
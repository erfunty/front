'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}
//https://geocode.xyz/${lat},${lng}?geoit=json
///////////////////////////////////////

const whereAmI= function(lat,lng){
    const t=fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=en`)
    .then(response=>{
        console.log(response);
        if(!response.ok) throw new Error(`${'too many req'} ${response.status});
        }`)
        return response.json()})
    .then(data=>{
        console.log(data);
        console.log(`You are in ${data.address.city}, ${data.address.country}`)
        return fetch(`https://restcountries.com/v2/name/${data.address.country}`)
    })
    .then(response=>response.json())
    .then(([data])=>{console.log(data)
        const html=`
        <article class="country">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>
  `
  countriesContainer.insertAdjacentHTML('beforeend',html)
  countriesContainer.style.opacity=1
    })
    .catch(err=>console.error(err))
}
whereAmI(52.508,13.381)
whereAmI(19.037,72.873)
whereAmI(-33.933,18.474)

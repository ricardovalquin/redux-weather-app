import axios from 'axios';

const API_KEY = 'c1e654a32ad08e933f7f59bb389e6a8b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'; // This variable holds the action type, for consistency through all the app

export function fetchWeather(city) {
  // An action always return an object that has a type property
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);


  return {
    type: 'FETCH_WEATHER',
    payload: request // if the payload is a promise, redux-promise library stops the action and once is resolved it
                    // sends the response data to the reducer as the payload
  };
}

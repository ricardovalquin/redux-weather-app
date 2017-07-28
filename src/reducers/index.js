import { combineReducers } from 'redux';

import WeatherReducer from './Reducer-weather';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;

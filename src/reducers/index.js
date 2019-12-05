import {combineReducers} from 'redux';
import WeatherReducer from './WeatherReducer';
import LocationReducer from './LocationReducer';
import APIstate from './APIstate';
import ForecastReducer from './ForecastReducer';
import favoriteReducer from './favoriteReducer';
import TemptureReducer from './TemptureReducer';
import ThemeReducer from './ThemeReducer';

export default combineReducers({
    Weather:WeatherReducer,
    Location:LocationReducer,
    APIstate:APIstate,
    Forecast:ForecastReducer,
    Favorites:favoriteReducer,
    TempatureUnit:TemptureReducer,
    Theme:ThemeReducer
});
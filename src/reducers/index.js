import {combineReducers} from "redux";
import LocationPath from './reducer_location';
import actionType from './reducer_actionType';

const rootReducer = combineReducers({location: LocationPath, actionType: actionType});

export default rootReducer;

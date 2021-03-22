import {combineReducers} from 'redux';
import global from './shared/reducers';
// import dictionary from '../Components/Auth/auth.reducers';

const rootReducer = combineReducers({global});

export default rootReducer;

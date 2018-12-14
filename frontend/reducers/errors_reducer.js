import { combineReducers } from 'redux';
import sessionsErrorReducer from "./session_errors_reducer";
import serverErrorsReducer from './server_errors_reducer';

const errorsReducer = combineReducers({
    login: sessionsErrorReducer,
    serverName: serverErrorsReducer,
})

export default errorsReducer;
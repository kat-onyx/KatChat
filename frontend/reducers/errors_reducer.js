import { combineReducers } from 'redux';
import sessionsErrorReducer from "./session_errors_reducer";

const errorsReducer = combineReducers({
    login: sessionsErrorReducer,
})

export default errorsReducer;
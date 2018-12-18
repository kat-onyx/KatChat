import { combineReducers } from 'redux';
import sessionsErrorReducer from "./session_errors_reducer";
import serverErrorsReducer from './server_errors_reducer';
import channelErrorsReducer from './channel_errors_reducer';

const errorsReducer = combineReducers({
    login: sessionsErrorReducer,
    serverName: serverErrorsReducer,
    channelName: channelErrorsReducer,
})

export default errorsReducer;
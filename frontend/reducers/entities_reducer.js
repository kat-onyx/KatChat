import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import serverReducer from './server_reducer';
import channelReducer from './channels_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    servers: serverReducer,
    channels: channelReducer,
})

export default entitiesReducer;
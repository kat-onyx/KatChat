import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import serverReducer from './server_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    servers: serverReducer,
})

export default entitiesReducer;
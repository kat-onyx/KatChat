import {
    RECEIVE_ALL_SERVERS,
    RECEIVE_SERVER,
    RECEIVE_SUB_SERVER,
    REMOVE_SERVER
} from "../actions/server_actions";
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const serverReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_ALL_SERVERS:
            return action.servers
        case RECEIVE_SERVER: 
            return merge({}, oldState, {[action.server.id]: action.server})
        case RECEIVE_SUB_SERVER:
            return merge({}, oldState, {[action.server.id]: action.server})
        case REMOVE_SERVER:
            let newState = merge({}, oldState);
            delete newState[action.server.id]
            return newState;
        case LOGOUT_CURRENT_USER:
            return {};
        default: 
            return oldState;
    }
}


export default serverReducer;
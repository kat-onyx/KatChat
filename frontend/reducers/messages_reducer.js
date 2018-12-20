import merge from 'lodash/merge';

import {
    RECEIVE_ALL_MESSAGES,
    RECEIVE_MESSAGE,
    REMOVE_MESSAGE
} from '../actions/message_actions';

const messagesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_MESSAGES: 
            return action.messages;
        case RECEIVE_MESSAGE: 
            
            return merge({}, state, action.message)
            //TODO: may be a problem if state is not updating immediately
            //TODO: implement remove
        default:
            return state;
    }
}

export default messagesReducer;
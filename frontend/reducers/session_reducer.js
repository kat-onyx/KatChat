import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';
import merge from 'lodash/merge'

const _nullUser = Object.freeze({
    id: null
  });

const sessionReducer = (oldState = _nullUser, action) => {
   
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, oldState, { id: action.currentUser.id})
        case LOGOUT_CURRENT_USER:
            return _nullUser
        default:
            return oldState
    }
}

export default sessionReducer;
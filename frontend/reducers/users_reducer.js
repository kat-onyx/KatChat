import {
    RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

const usersReducer = (oldState = {}, action) => {
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
        merge({}, state, { [action.user.id]: action.currentUser })
        default:
            return oldState;
    }
}

export default usersReducer;
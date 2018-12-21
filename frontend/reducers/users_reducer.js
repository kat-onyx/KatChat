import {
    RECEIVE_ALL_USERS,
    RECEIVE_USER
} from '../actions/user_actions'
import merge from 'lodash'

const usersReducer = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_ALL_USERS:
            return action.users
        case RECEIVE_USER:
            return merge({}, state, { [action.user.id]: action.user})
        default:
            return state;
    }
}

export default usersReducer;
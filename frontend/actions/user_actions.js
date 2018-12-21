import * as APIUserUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

export const receiveAllUsers = users => {
    return {
        type: RECEIVE_ALL_USERS,
        users
    }
}

export const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user
    }
}

export const fetchUsers = (server) => dispatch => {
    return APIUserUtil.fetchUsers(server)
        .then( resp => dispatch(receiveAllUsers(resp)))
}

export const fetchUser = (server) => dispatch => {
    return APIUserUtil.fetchUser(server)
        .then( resp => dispatch(receiveUser(resp)))
}

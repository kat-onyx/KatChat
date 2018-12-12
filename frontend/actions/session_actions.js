import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";


const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
};

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    }
};

const receiveErrors = (errors) => {
    return {
        RECEIVE_SESSION_ERRORS,
        errors
    }
};

export const login = (user) => dispatch => {
    APIUtil.login(user) 
    .then((resp) => dispatch(receiveCurrentUser(resp))),
    err => (dispatch(receiveErrors(err.responseJSON)))
};

export const signup = (user) => dispatch => {
    APIUtil.signup(user) 
    .then((resp) => dispatch(receiveCurrentUser(resp))),
    err => (dispatch(receiveErrors(err.responseJSON)))
};

export const logout = () => dispatch => {
    APIUtil.login() 
    .then((resp) => dispatch(logoutCurrentUser(resp))),
    err => (dispatch(receiveErrors(err.responseJSON)))
};
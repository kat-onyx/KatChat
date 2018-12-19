import * as APIMessageUtil from '../util/message_api_util';

export const RECEIVE_ALL_MESSAGES = "RECEIVE_ALL_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";
export const RECEIVE_MESSAGE_ERRORS = "RECEIVE_MESSAGE_ERRORS";


const receiveAllMessages = (messages) => {
    return {
        type: RECEIVE_ALL_MESSAGES,
        messages
    }
}

const receiveMessage = (message) => {
    return {
        type: RECEIVE_MESSAGE,
        message
    }
}

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_MESSAGE_ERRORS,
        errors
    }
}

//TODO: Implement ability to remove messages/update
const removeMessage = () => {
    return {
        type: REMOVE_MESSAGE,
    }
}

export const fetchMessages = (channel) => dispatch => {
    return APIMessageUtil.fetchMessages(channel)
        .then( resp => dispatch(receiveAllMessages(resp)),
                err => dispatch(receiveErrors(err.responseJSON)))
}

export const fetchMessage = (message) => dispatch => {
    return APIMessageUtil.fetchMessage(message)
        .then( resp => dispatch(receiveMessage(resp)),
                err => dispatch(receiveErrors(err.responseJSON)))
}

export const createMessage = (message) => dispatch => {
    return APIMessageUtil.createMessage(message)
        .then( resp => dispatch(receiveMessage(resp)),
                err => dispatch(receiveErrors(err.responseJSON)))
}

export const updateMessage = (message) => dispatch => {
    return APIMessageUtil.updateMessage(message)
        .then( resp => dispatch(receiveMessage(resp)),
                err => dispatch(receiveErrors(err.responseJSON)))
}
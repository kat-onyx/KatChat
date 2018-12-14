import * as APIServerUtil from "../util/server_api_util";

export const REMOVE_SERVER = "REMOVE_SERVER";
export const RECEIVE_ALL_SERVERS = "RECEIVE_ALL_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const RECEIVE_SERVER_ERRORS = "RECEIVE_SERVER_ERRORS";

const receiveAllServers = (servers) => {
    return {
        type: RECEIVE_ALL_SERVERS,
        servers 
    }
}

const receiveServer = (server) => {
    return {
        type: RECEIVE_SERVER,
        server
    }
}

const removeServer = () => {
    return {
        type: REMOVE_SERVER
    }
}

export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_SERVER_ERRORS,
        errors
    }
}

export const createServer = (server) => dispatch => {
    APIServerUtil.createServer(server)
        .then( resp => dispatch(receiveServer(resp)),
                err => dispatch(receiveErrors(err.responseJSON))
        )
}

export const updateServer = (server) => dispatch => {
    APIServerUtil.updateServer(server)
        .then( resp => dispatch(receiveServer(resp)),
                err => dispatch(receiveErrors(err.responseJSON))
        )
}

export const deleteServer = (server) => dispatch => {
    APIServerUtil.deleteServer(server)
        .then( resp => dispatch(removeServer(resp)),
                err => dispatch(receiveErrors(err.responseJSON))
        )
}

export const fetchServers = (server) => dispatch => {
    APIServerUtil.fetchServers(server)
        .then( resp => dispatch(receiveAllServers(resp)),
                err => dispatch(receiveErrors(err.responseJSON))
        )
}

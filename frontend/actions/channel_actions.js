import * as APIChannelUtil from '../util/channel_api_util';

export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";


export const receiveAllChannels = (channels) => {
    return {
        type: RECEIVE_ALL_CHANNELS,
        channels
    }
}

export const receiveChannel = (channel) => {
    return {
        type: RECEIVE_CHANNEL,
        channel
    }
}

export const removeChannel = (channel) => {
    return {
        type: REMOVE_CHANNEL,
        channelId: channel.id
    }
}

export const receiveErrors = (errors = []) => {
    return {
        type: RECEIVE_CHANNEL_ERRORS,
        errors
    }
}

export const fetchChannel = (channel) => dispatch => {
   return APIChannelUtil.fetchChannel(channel)
            .then(resp => dispatch(receiveChannel(resp)),
                err => dispatch(receiveErrors(err.responseJSON)))
}

export const fetchChannels = (server) => dispatch => {
   return APIChannelUtil.fetchChannels(server)
            .then(resp => dispatch(receiveAllChannels(resp)),
                err => dispatch(receiveErrors(err.responseJSON)))
}


export const createChannel = (channel) => dispatch => {
   return APIChannelUtil.createChannel(channel)
            .then(resp => dispatch(receiveChannel(resp)),
                    err => dispatch(receiveErrors(err.responseJSON)))
}

export const updateChannel = (channel) => dispatch => {
   return APIChannelUtil.updateChannel(channel)
            .then(resp => dispatch(receiveChannel(resp)),
                err => dispatch(receiveErrors(err.responseJSON)))
}

export const deleteChannel = (channel) => dispatch => {
   return APIChannelUtil.deleteChannel(channel)
            .then(resp => dispatch(removeChannel(resp)),
                err => dispatch(receiveErrors(err.responseJSON)))
}
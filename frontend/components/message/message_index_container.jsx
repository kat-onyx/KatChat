import React from 'react';
import { connect } from 'react-redux';
import MessageIndex from './message_index';
import { fetchMessages, createMessage } from '../../actions/message_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    
    const currentChannelId = ownProps.props.match.params.channelId;
    const currentChannelName = state.entities.channels[currentChannelId];
    const currentUserId = state.session.id;
    const currentServerId = ownProps.props.match.params.serverId;
    const users = state.entities.users;
    const channels = state.entities.channels || {};
     
    return { 
        messages: Object.values(state.entities.messages),
        currentChannelId,
        currentChannelName,
        currentUserId,
        currentServerId,
        users,
        channels
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMessages: (id) => dispatch(fetchMessages(id)),
        createMessage: (message) => dispatch(createMessage(message))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageIndex));
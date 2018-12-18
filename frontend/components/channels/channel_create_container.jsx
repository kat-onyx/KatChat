import React from 'react';
import { createChannel, receiveErrors } from '../../actions/channel_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ChannelCreateForm from './channel_create_form';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
    return {
        channelServerId: state.entities.servers[ownProps.match.params.serverId],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        createChannel: (channel) => dispatch(createChannel(channel))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelCreateForm));
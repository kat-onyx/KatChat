import React from 'react';
import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { fetchChannels } from '../../actions/channel_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        // currentUser: state.entities.users[state.session.id],
        channels: Object.values(state.entities.channels),
        currentServerId: ownProps.props.match.params.serverId
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchChannels: (id) => dispatch(fetchChannels(id)),
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);
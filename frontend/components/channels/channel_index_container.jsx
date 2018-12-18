import React from 'react';
import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { fetchChannels } from '../../actions/channel_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    
    return {
        channels: Object.values(state.entities.channels),
        currentServerId: ownProps.props.match.params.serverId,
        currentUserId: state.session.id,
        // currentServer: state.servers[currentServerId] || {}
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchChannels: (id) => dispatch(fetchChannels(id)),
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);
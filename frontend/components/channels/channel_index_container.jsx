import React from 'react';
import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { fetchChannels } from '../../actions/channel_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    const currentServerId = ownProps.props.match.params.serverId;
    const server = state.entities.servers[ownProps.props.match.params.serverId] || {};
    const serverOwnerId = server.owner_id;
    const servers = state.entities.servers || {};
    return {
        channels: Object.values(state.entities.channels),
        currentServerId,
        serverOwnerId,
        currentUserId: state.session.id,
        servers
        // currentServer: state.servers[currentServerId]
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchChannels: (id) => dispatch(fetchChannels(id)),
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelIndex));
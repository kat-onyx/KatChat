import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import ServerIndex from './server_index';
import { fetchServers, createSub } from '../../actions/server_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchChannels} from '../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        servers: Object.values(state.entities.servers),
        selectedServerId: ownProps.match.params.serverId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchServers: () => dispatch(fetchServers()),
        fetchChannels: (id) => dispatch(fetchChannels(id)),
        createSub: (server) => dispatch(createSub(server)),
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerIndex));
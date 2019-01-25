import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchServer, fetchServers } from '../../actions/server_actions';
import ServerShow from './server_show';

const mapStateToProps = (state, ownProps) => {
    // debugger
    const currentServerId = ownProps.match.params.serverId;
    const currentServer = state.entities.servers[currentServerId] || {};
    const ownedChannels = ownProps.channels;

    return {
        currentServerId,
        currentServer,
        ownedChannels
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchServer: (server) => dispatch(fetchServer(server))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerShow));
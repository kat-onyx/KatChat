import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchServer, fetchServers } from '../../actions/server_actions';
import ServerShow from './server_show';

const mapStateToProps = (state, ownProps) => {
 
    const currentServerId = ownProps.match.params.serverId;
    const currentServer = state.entities.servers[currentServerId] || {};

    return {
        currentServerId,
        currentServer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchServer: (server) => dispatch(fetchServer(server))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerShow));
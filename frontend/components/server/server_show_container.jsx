import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchServer, fetchServers } from '../../actions/server_actions';
import ServerShow from './server_show';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        servers: state.entities.servers,
        currentServerId: state.servers[ownProps.props.match.params.serverId]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchServer: (server) => dispatch(fetchServer(server))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerShow);
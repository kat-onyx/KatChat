import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import ServerIndex from './server_index';
import { fetchServers } from '../../actions/server_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        servers: state.entities.servers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchServers: () => dispatch(fetchServers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex);
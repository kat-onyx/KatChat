import React from 'react';
import ServerForm from "./server_form";
import { Link, withRouter } from 'react-router-dom';
import { createServer, receiveErrors } from "../../actions/server_actions";
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        errors: state.errors.serverName,
        currentUser: state.entities.users[state.session.id]
        
    } 
}

const mapDispatchToProps = dispatch => {
    return {
        createServer: (server) => dispatch(createServer(server)),
        clearErrors: () => dispatch(receiveErrors([])),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerForm);
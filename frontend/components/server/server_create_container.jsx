import React from 'react';
import ServerForm from "./server_create_form";
import { Link, withRouter } from 'react-router-dom';
import { createServer, receiveErrors } from "../../actions/server_actions";
import { connect } from 'react-redux';
import { openModal, closeModal} from "../../actions/modal_actions";

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
        closeModal: () => dispatch(closeModal()),
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerForm);
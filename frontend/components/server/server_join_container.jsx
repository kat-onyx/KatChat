import React from 'react';
import JoinForm from './server_join_form';
import { Link, withRouter } from 'react-router-dom';
import { createSub, receiveErrors } from'../../actions/server_actions';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return {
        errors: state.errors.ServerName,
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createSub: (server) => dispatch(createSub(server)),
        clearErrors: () => dispatch(receiveErrors([])),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinForm)
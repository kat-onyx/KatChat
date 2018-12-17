import React from 'react';
import { connect }  from 'react-redux';
import { openModal, closeModal } from "../../actions/modal_actions";
import { createSub, destroySub } from "../../actions/server_actions";
import AddServer from './server_add_forms';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.serverName,
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: (modal) => dispatch(closeModal(modal)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddServer);
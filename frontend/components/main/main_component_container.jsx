import React from 'react';
import { connect } from 'react-redux'
import MainComponent from './main_component';
import { openModal, closeModal } from "../../actions/modal_actions";



const mapStateToProps = (state, ownProps) => {
    return {
        servers: state.entities.servers,
        currentUser: state.session.user,
        // modal: state.ui.modal.modalType
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (modal) => dispatch(openModal(modal)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);




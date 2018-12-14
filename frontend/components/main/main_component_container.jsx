import React from 'react';
import { connect } from 'react-redux'
import MainComponent from './main_component';

const mapStateToProps = (state, ownProps) => {
    return {
        servers: state.entities.servers,
        currentUser: state.session.user || {},
        // modal: state.ui.modal.modalType
    }
}
const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);




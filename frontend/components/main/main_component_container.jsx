import React from 'react';
import { connect } from 'react-redux'
import MainComponent from './main_component';
import { withRouter } from 'react-router-dom';
//testing
import { openModal, closeModal } from "../../actions/modal_actions";



const mapStateToProps = (state, ownProps) => {
    return {
        servers: state.entities.servers,
        currentUser: state.session.user,
        currentServerId: state.entities.servers[ownProps.match.params.serverId]
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (modal) => dispatch(openModal(modal)) 
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));




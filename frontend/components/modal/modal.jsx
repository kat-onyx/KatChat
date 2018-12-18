import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateServerContainer from '../server/server_create_container';
import AddServerContainer from '../server/server_add_container';
import JoinServerContainer from '../server/server_join_container';
import CreateChannelContainer from '../channels/channel_create_container'

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
   
    switch (modal) {
        case 'addServer':
            component = <AddServerContainer />;
            break;
        case 'createServer':
            component = <CreateServerContainer />;
            break;
        case 'joinServer':
            component = <JoinServerContainer />;
            break;
        case 'createChannel':
            component = <CreateChannelContainer />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

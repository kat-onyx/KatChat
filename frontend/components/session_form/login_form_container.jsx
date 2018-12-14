import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({errors}) => {
    return {
        errors: errors.login,
        formType: 'Welcome back!',
        navLink: <div>Need an account? <Link to="/signup" className="redirect"> Register</Link></div>
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(receiveErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)


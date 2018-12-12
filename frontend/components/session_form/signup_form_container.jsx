import { signup } from "../../actions/session_actions";
import { connect } from "http2";
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import React from 'react';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.login,
        formType: 'Sign Up',
        navLink: <Link to="/login">Log In</Link>
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
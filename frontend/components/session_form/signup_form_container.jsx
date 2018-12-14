import { signup, receiveErrors } from "../../actions/session_actions";
import { connect } from "react-redux";
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import React from 'react';

const mapStateToProps = ({errors}) => {
    return {
        errors: errors.login,
        formType: 'Create an account',
        navLink: <Link to="/login" className="redirect">Already have an account?</Link>
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        processForm: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(receiveErrors([]))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
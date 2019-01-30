import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { login, receiveErrors } from "../../actions/session_actions";
import SplashPage from "./spashPage";

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = dispatch => {
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SplashPage);

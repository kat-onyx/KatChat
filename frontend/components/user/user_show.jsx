import React from 'react';

class UserShow extends React.Component {

    render() {
        let username = null;
        if (this.props.currentUser) {
            username = this.props.currentUser.username;
        }
        return (
            <div className="user-content">
                <div className="username-box">
                    {username}
                </div>
                <button className="logout-button" onClick={() => this.props.logout()}><span>Logout</span></button>
            </div>
        )
    }
}

export default UserShow;
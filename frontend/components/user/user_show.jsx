import React from 'react';

class UserShow extends React.Component {

    render() {
        return (
            <div className="user-content">
                <div className="username-box">
                    {this.props.currentUser.username}
                </div>
                <button onClick={() => this.props.logout()}><span>Logout</span></button>
            </div>
        )
    }
}

export default UserShow;
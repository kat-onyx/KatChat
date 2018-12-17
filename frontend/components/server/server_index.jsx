import React from 'react';
import ServerIndexItem from './server_index_item';

class ServerIndex extends React.Component {

    componentDidMount() {
        this.props.fetchServers();
    }


    render () {
        let server = this.props.servers.map((server) => {
            return (<ServerIndexItem server={server}/>)
        })

        return (
            <div className="server-index-container">
                {server}
                <button className="createServerButton" onClick={() => this.props.openModal('addServer')}>+</button>
            </div>
        )
    }
}

export default ServerIndex;
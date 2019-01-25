import React from 'react';
import ServerIndexItem from './server_index_item';


class ServerIndex extends React.Component {

    componentDidMount() {
        // debugger
        this.props.fetchServers();
    }

    componentDidUpdate(prevProps) {
        // debugger
        if (this.props.servers != prevProps.servers) {
            if (this.props.servers.length === 0 || this.props.servers[0].id !== 1) {
                this.props.createSub({ name: "AppA" });
            }      
        }
    }

    
    

    render () {
        
        let server = this.props.servers.map((server) => {
            return (<ServerIndexItem key={server.id} server={server} fetchChannels={this.props.fetchChannels} ownProps={this.props}/>)
        })

        return (
            <div className="server-index-container">
                {server}
                <button className="createServerButton" onClick={() => this.props.openModal('addServer')}><span className="plus">+</span></button>
            </div>
        )
    }
}

export default ServerIndex;
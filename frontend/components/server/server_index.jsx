import React from 'react';
import ServerIndexItem from './server_index_item';


class ServerIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedServerId: null
        }

        this.handleServerItemClick = this.handleServerItemClick.bind(this)
    }
    componentDidMount() {
        // debugger
        this.props.fetchServers();
    }

    componentDidUpdate(prevProps) {
        // debugger
        if (this.props.servers != prevProps.servers) {
            if (this.props.servers.length === 0 || this.props.servers[0].id !== 1) {
                this.props.createSub({ name: "General" });
            }      
        }
    }

    
    handleServerItemClick(id) {
        this.setState({ selectedServerId: id })
    }

    render () {
        
        let server = this.props.servers.map((server) => {
            return (<ServerIndexItem
                key={server.id}
                id={server.id}
                name={server.name}
                fetchChannels={this.props.fetchChannels}
                ownProps={this.props}
                onClick={this.handleServerItemClick}
                active={this.state.selectedServerId === server.id}
            />)
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
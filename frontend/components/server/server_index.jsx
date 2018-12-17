import React from 'react';

class ServerIndex extends React.Component {

    componentDidMount() {
        this.props.fetchServers();
    }


    render () {
        let serverIndexItems = this.props.servers.map((server) => {
            return (<ServerIndexItems server={server}/>)
        })

        return (
            <div>
                {serverIndexItems}
            </div>
        )
    }
}

export default ServerIndex;
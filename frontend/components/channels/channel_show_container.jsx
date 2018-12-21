import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchChannel } from '../../actions/channel_actions';
import ChannelShow from './channel_show';

const mapStateToProps = (state, ownProps) => {
    // debugger
    const currentChannelId = ownProps.match.params.channelId;
    const currentChannel = state.entities.channels[currentChannelId] || {};

    return {
        currentChannelId,
        currentChannel
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchChannel: (channel) => dispatch(fetchChannel(channel))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelShow))


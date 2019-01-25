import React from 'react';

const SubscriberIndex = (props) => {
    debugger
    let subsArr = Object.values(props.subscribers);
    let subs = subsArr.map( (sub) => {
         return <div className="sub-content" key={sub.id}>{sub.username}</div>
    })
    return (
        <div className="subscriber-buffer">
            <div className="subscriber-title"> Members - {subs.length} </div>
            <div className="subscribers-box-inner">{subs}</div>
        </div>
    )
}

export default SubscriberIndex;
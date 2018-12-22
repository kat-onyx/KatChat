import React from 'react';

const SubsriberIndex = (props) => {
  
    let subsArr = Object.values(props.subscribers);
    let subs = subsArr.map( (sub) => {
         return <div className="sub-content">{sub.username}</div>
    })
    return (
        <div className="subscriber-buffer">
            <div className="subsriber-title"> Members - {subs.length} </div>
            <div className="subscribers-box-inner">{subs}</div>
        </div>
    )
}

export default SubsriberIndex;
import React from 'react';

const SubsriberIndex = () => {
    let subsArr = Object.keys(this.props.subsctibers);
    let subs = subsArr.map( sub => {
        return (<div>sub.username</div>)
    })
    return (
        <div className="subscribers-box">{subs}</div>
    )
}

export default SubsriberIndex;
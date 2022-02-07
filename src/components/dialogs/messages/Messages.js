import React from 'react';
import c from './Messages.module.scss'

const Messages = (props) => {
    return (
        <div className={c.message}>{props.message}</div>
    )
}


export default Messages;
import React from 'react';

import c from './IssetPost.module.scss'

const IssetPost = (props) => {
    return (

        <div className={c.isset_post}>
            <div className={c.ava}></div>
            <div className={c.message}>
                {props.message}
            </div>

        </div>

    )
};

export default IssetPost;
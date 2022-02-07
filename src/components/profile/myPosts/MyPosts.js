import React from 'react';

import c from './MyPosts.module.scss'

import IssetPost from "./issetPost/IssetPost";


const MyPosts = (props) => {

    let postData = props.postData.map( elem => <IssetPost message={elem.message} /> );

    return (

        <div className={c.posts}>
            <h3>My posts</h3>

            <div className={c.new_post}>
                <textarea className={c.textarea} rows="1"  maxlength="400" placeholder='What do you have in mind...'>What do you have in mind</textarea>
                <button className={c.button}>Add post</button>
            </div>

            <div className={c.isset_posts}>
                {postData}
            </div>

        </div>

    )
};

export default MyPosts;
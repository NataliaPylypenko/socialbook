import React from 'react';

import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import ProfileCover from "./profileCover/ProfileCover";

const Profile = (props) => {

    let postData = props.postData;

    return (
        <>
            <ProfileCover />
            <ProfileInfo />
            <MyPosts postData={postData} />
        </>
    )
};

export default Profile;
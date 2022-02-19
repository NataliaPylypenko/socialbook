import React from 'react';

import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import ProfileCover from "./profileCover/ProfileCover";

const Profile = (props) => {

    return (
        <>
            <ProfileCover />
            <ProfileInfo />
            <MyPosts newPostText={props.newPostText}
                     postData={props.profilePage.postData}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost} />
        </>
    )
};

export default Profile;
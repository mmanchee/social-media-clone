import React from 'react';
import Profile from "./Profile";
import ProfileDescription from "./ProfileDescription";
import NewsFeed from "./NewsFeed";
import FriendRequestList from "./FriendRequestList";


function Body() {
  return (
    <React.Fragment>
      <hr />
      <Profile
        name="Mike"
        img="https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png" />
      <ProfileDescription 
        description="Hello, my name is Mike."/>
      <NewsFeed />
      <FriendRequestList />
    </React.Fragment>
  )
}

export default Body;
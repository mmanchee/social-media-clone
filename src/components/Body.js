import React from 'react';
import Profile from "./Profile";
import ProfileDescription from "./ProfileDescription";
import NewsFeed from "./NewsFeed";
import FriendRequestList from "./FriendRequestList";


function Body() {
  return (
    <React.Fragment>
      <hr />
      <table>
        <tr>
          <td id="column-1">
            <Profile 
              name="Mike"
              img="https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png" />
            <ProfileDescription 
              description="Hello, my name is Mike."/>
          </td>
          <td id="column-2">
            <NewsFeed />
          </td>
          <td id="column-3">
            <FriendRequestList />
          </td>
        </tr>
      </table>
    </React.Fragment>
  )
}

export default Body;
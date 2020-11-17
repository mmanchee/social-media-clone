import React from 'react';
import FriendRequest from './FriendRequest';

const FriendRequests = [
  {
    name: "John",
    img:"https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png"
  },
  {
    name: "George",
    img:"https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png"
  },
  {
    name: "Paul",
    img:"https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png"
  },
  {
    name: "Ringo",
    img:"https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png"
  }
]

function FriendRequestList(){
  return (
    <React.Fragment>
      <div class="friend-request">
        <div class="inner">
          <h3>Friend Requests</h3>
          <hr />
          {FriendRequests.map((request, index) =>
            <FriendRequest
              name={request.name}
              img={request.img}
              key={index} />
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default FriendRequestList;
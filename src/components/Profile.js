import React from "react";
import PropTypes from "prop-types";

function Profile(props) {
  return (
    <React.Fragment>
      <div class="profile">
        <div id="profile-top">
          <img src={props.img} class ="profile-img"/>
        </div>
        <div id="profile-bottom">
          <h3 id="profile-name">{props.name}</h3>
          <div id="profile-nav">
            <a href="" >TWEETS</a>
            <a href="" >FOLLOWING</a>
            <a href="" >FOLLOWERS</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Profile.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string
}

export default Profile;
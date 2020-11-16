import React from "react";
import PropTypes from "prop-types";

function Profile(props) {
  return (
    <React.Fragment>
      <img src={props.img}/>
      <h3>{props.name}</h3>
      <a href="" >Tweets</a>
      <a href="" >Following</a>
      <a href="" >Followers</a>
    </React.Fragment>
  );
}

Profile.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string
}

export default Profile;
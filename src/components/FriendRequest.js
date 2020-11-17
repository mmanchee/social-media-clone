import React from 'react';
import PropTypes from 'prop-types';

function FriendRequest(props){
  return (
    <React.Fragment>
      <div>
        <img src={props.img} class = "users-img" />
        <h6>{props.name}</h6>
        <button>Accept</button>
      </div>
    </React.Fragment>
  )
}

FriendRequest.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string
}

export default FriendRequest;
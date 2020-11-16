import React from 'react';
import PropTypes from 'prop-types';

function FriendRequest(props){
  return (
    <React.Fragment>
      <img src={props.img} />
      <h6>{props.name}</h6>
      <button>Accept</button>
    </React.Fragment>
  )
}

FriendRequest.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string
}

export default FriendRequest;
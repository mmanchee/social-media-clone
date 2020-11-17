import React from 'react';
import PropTypes from 'prop-types';

function ProfileDescription(props) {
  return (
    <p id="description">{props.description}</p>
  )
}

ProfileDescription.propTypes = {
  description: PropTypes.string
}

export default ProfileDescription;
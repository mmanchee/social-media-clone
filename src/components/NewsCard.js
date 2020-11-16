import React from "react";
import PropTypes from "prop-types";

function NewsCard(props) {
  return (
    <React.Fragment>
      <img src={props.img} />
      <h3>{props.user}</h3>
      <p>{props.message}</p>
      <hr />
    </React.Fragment>
  );
}

NewsCard.propTypes = {
  img: PropTypes.string,
  user: PropTypes.string,
  message: PropTypes.string
};

export default NewsCard;
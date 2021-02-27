import React from "react";
import s from "./FriendListItem.module.css";
import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline, stat }) => {
  if (!isOnline) {
    stat = "offLine";
  }
  return (
    <>
      <span className={s[stat]}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt={name} />
      <p className={s.name}>{name}</p>
    </>
  );
};

export default FriendListItem;

FriendListItem.defaultProps = {
  stat: "onLine",
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  stat: PropTypes.oneOf(["onLine", "offLine"]),
};

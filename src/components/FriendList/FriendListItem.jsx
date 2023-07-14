import React from 'react';
import PropTypes from 'prop-types';
import { colorStatus, Image, ListItem, Status } from './FriendStyle';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ListItem className="item">
      <Status
        style={{ backgroundColor: colorStatus(isOnline) }}
        className="status"
      >
        {isOnline}
      </Status>
      <Image className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
export default FriendListItem;

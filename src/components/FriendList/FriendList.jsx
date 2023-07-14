import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { Container } from './FriendStyle';

const FriendList = ({ friends }) => {
  return (
    <Container className="friend-list">
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </Container>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
export default FriendList;

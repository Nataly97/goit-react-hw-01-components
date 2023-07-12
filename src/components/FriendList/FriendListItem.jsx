import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 400px;
  height: 80px;
  text-align: center;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
  margin: 15px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 50px;
  padding: 10px;
  border-radius: 5px;
`;

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ListItem className="item">
      <span className="status">{isOnline}</span>
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

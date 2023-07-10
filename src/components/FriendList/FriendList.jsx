import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import './friendList.css';

const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(friend =>
            <FriendListItem
            avatar={friend.avatar} 
            name={friend.name} 
            isOnline={friend.isOnline}
            key={friend.id}
             />)}
        </ul>
    )
}

FriendList.propTypes = {
    friends : PropTypes.array,
}
export default FriendList;
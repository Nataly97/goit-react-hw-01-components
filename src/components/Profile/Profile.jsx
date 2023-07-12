import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: block;
  width: 300px;
  height: 400px;
  position: relative;
  left: 40%;
  text-align: center;
  border: 2px solid #707f8c;
  border-radius: 5px;
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 50px;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  top: 30px;
`;

const List_Item = styled.li`
  height: 40px;
  width: 40px;
  padding: 30px;
  background-color: #f3f6f9;
  border: 1px solid #707f8c;
`;

const Info = styled.p`
  font-size: 1em;
  color: #b3bbc3;
`;

const Info_Title = styled.span`
  font-size: 0.8em;
  color: #95a2af;
`;

const Info_Data = styled.span`
  color: #3a4b5e;
  font-size: 1em;
`;

const Title = styled.p`
  font-size: 1.7em;
  margin: 0;
  color: #122236;
`;

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container className="profile">
      <div className="description">
        <Image src={avatar} alt="User avatar" className="avatar" />
        <Title className="name">
          <strong>{username}</strong>
        </Title>
        <Info className="tag">@{tag}</Info>
        <Info className="location">{location}</Info>
      </div>

      <List className="stats">
        <List_Item>
          <Info_Title className="label">Followers</Info_Title>
          <br></br>
          <Info_Data className="quantity">
            <strong>{stats.followers}</strong>
          </Info_Data>
        </List_Item>
        <List_Item>
          <Info_Title className="label">Views</Info_Title>
          <br></br>
          <Info_Data className="quantity">
            <strong>{stats.views}</strong>
          </Info_Data>
        </List_Item>
        <List_Item>
          <Info_Title className="label">Likes</Info_Title>
          <br></br>
          <Info_Data className="quantity">
            <strong>{stats.likes}</strong>
          </Info_Data>
        </List_Item>
      </List>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
export default Profile;

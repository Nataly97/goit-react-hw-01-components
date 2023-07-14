import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Image,
  List,
  ListItem,
  Info,
  InfoData,
  InfoTitle,
  Title,
} from './ProfileStyle';

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
        <ListItem>
          <InfoTitle className="label">Followers</InfoTitle>
          <br></br>
          <InfoData className="quantity">
            <strong>{stats.followers}</strong>
          </InfoData>
        </ListItem>
        <ListItem>
          <InfoTitle className="label">Views</InfoTitle>
          <br></br>
          <InfoData className="quantity">
            <strong>{stats.views}</strong>
          </InfoData>
        </ListItem>
        <ListItem>
          <InfoTitle className="label">Likes</InfoTitle>
          <br></br>
          <InfoData className="quantity">
            <strong>{stats.likes}</strong>
          </InfoData>
        </ListItem>
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

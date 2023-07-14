import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Title,
  List,
  ListItem,
  randomHexColor,
} from './StatisticsStyle';

const Statistics = ({ title, stats }) => {
  return (
    <Container className="statistics">
      {title && <Title className="title">{title}</Title>}
      <List className="stat-list">
        {stats.map(stat => (
          <ListItem
            style={{ backgroundColor: randomHexColor() }}
            className="item"
            key={stat.id}
          >
            <span className="label">{stat.label}</span>
            <br></br>
            <span className="percentage">{stat.percentage} %</span>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
export default Statistics;

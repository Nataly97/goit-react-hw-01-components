import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.section`
  text-align: center;
  position: relative;
  top: 30px;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 20px;
`;

const List_Item = styled.li`
  padding: 20px;
  color: #ffffff;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: #5f676c;
`;

const Statistics = ({ title, stats }) => {
  return (
    <Container className="statistics">
      {title && <Title className="title">{title}</Title>}
      <List className="stat-list">
        {stats.map(stat => (
          <List_Item
            style={{ ...styled, backgroundColor: RandomHexColor() }}
            className="item"
            key={stat.id}
          >
            <span className="label">{stat.label}</span>
            <br></br>
            <span className="percentage">{stat.percentage} %</span>
          </List_Item>
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

function RandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

import React from 'react';
import PropTypes from 'prop-types';
import StatisticsTitle from './StatisticsTitle';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <StatisticsTitle title={title} />

      <ul className="stat-list">
        {stats.map(stat => (
          <li className="item" key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
export default Statistics;

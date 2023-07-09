import React from 'react';
import PropTypes from 'prop-types';
import StatisticsTitle from './StatisticsTitle';

const Statistics = ({ title, stats }) => {
    return (  
        <section class="statistics">
            <StatisticsTitle title={title}/>

            <ul class="stat-list">
                <li class="item">
                    <span class="label">{stats[0].label}</span>
                    <span class="percentage">{stats[0].percentage}%</span>
                </li>
                <li class="item">
                    <span class="label">{stats[1].label}</span>
                    <span class="percentage">{stats[1].percentage}%</span>
                </li>
                <li class="item">
                    <span class="label">{stats[2].label}</span>
                    <span class="percentage">{stats[2].percentage}%</span>
                </li>
                <li class="item">
                    <span class="label">{stats[3].label}</span>
                    <span class="percentage">{stats[3].percentage}%</span>
                </li>
                <li class="item">
                    <span class="label">{stats[4].label}</span>
                    <span class="percentage">{stats[4].percentage}%</span>
                </li>
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
}
export default Statistics;
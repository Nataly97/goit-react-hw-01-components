import React from 'react';
import PropTypes from 'prop-types';

const StatisticsTitle = ({ title }) => {
    if (!title) return null
    return (  
        <h2 class="title">{title}</h2>
    )
}

StatisticsTitle.propTypes = {
    title: PropTypes.string,
}
export default StatisticsTitle;
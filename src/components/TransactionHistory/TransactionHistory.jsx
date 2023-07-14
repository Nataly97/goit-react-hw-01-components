import React from 'react';
import PropTypes from 'prop-types';
import { Container, Info, Titles } from './TransactionStyle';

const TransactionHistory = ({ items }) => {
  return (
    <Container className="transaction-history">
      <thead>
        <tr>
          <Titles>Type</Titles>
          <Titles>Amount</Titles>
          <Titles>Currency</Titles>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <Info>{item.type}</Info>
            <Info>{item.amount}</Info>
            <Info>{item.currency}</Info>
          </tr>
        ))}
      </tbody>
    </Container>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};

export default TransactionHistory;

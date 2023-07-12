import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.table`
  width: 600px;
  height: auto;
  position: relative;
  left: 30%;
  text-align: center;
  margin: 15px;
`;

const Titles = styled.th`
  background-color: #00bcd5;
  padding: 15px;
  color: #ffffff;
`;

const Info = styled.td`
  background-color: #ecf1f3;
  padding: 15px;
  color: #84878b;
`;

// const Container_Info = styled.tr`
//   ${props => {
//     console.log(props.children.length)
//     switch (props.children.length) {
//       case '3':
//         return css`
//         background-color: red;`;
//       default:
//         return `
//         background-color: blue;`;
//     }
//   }}
// `;
const TransactionHistory = ({ items }) => {
  return (
    <Container className="transaction-history">
      <thead>
        <tr>
          <Titles default>Type</Titles>
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

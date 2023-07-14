import styled from 'styled-components';

const Container = styled.table`
  width: 600px;
  height: auto;
  position: relative;
  left: 30%;
  top: 100px;
  text-align: center;
  margin: 0;
  padding: 15px;
`;

const Info = styled.td`
  background-color: #ecf1f3;
  padding: 15px;
  color: #84878b;
`;

const Titles = styled.th`
  background-color: #00bcd5;
  padding: 15px;
  color: #ffffff;
`;

export { Container, Info, Titles };

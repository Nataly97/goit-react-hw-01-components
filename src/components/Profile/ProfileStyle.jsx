import styled from 'styled-components';

const Container = styled.div`
  display: block;
  width: 300px;
  height: 400px;
  position: relative;
  left: 40%;
  top: 15px;
  text-align: center;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
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

const ListItem = styled.li`
  height: 40px;
  width: 40px;
  padding: 30px;
  background-color: #f3f6f9;
  border: 1px solid #e8ecf2;
`;

const Info = styled.p`
  font-size: 1em;
  color: #b3bbc3;
`;

const InfoTitle = styled.span`
  font-size: 0.8em;
  color: #95a2af;
`;

const InfoData = styled.span`
  color: #3a4b5e;
  font-size: 1em;
`;

const Title = styled.p`
  font-size: 1.7em;
  margin: 0;
  color: #122236;
`;

export { Container, Image, List, ListItem, Info, InfoData, InfoTitle, Title };

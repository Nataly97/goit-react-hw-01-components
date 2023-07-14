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

const ListItem = styled.li`
  padding: 20px;
  color: #ffffff;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: #5f676c;
`;

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export { Container, Title, List, ListItem, randomHexColor };

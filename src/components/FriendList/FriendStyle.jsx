import styled from 'styled-components';

const Container = styled.ul`
  display: block;
  width: 450px;
  height: auto;
  position: relative;
  left: 33%;
  top: 100px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 5px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 400px;
  height: 80px;
  text-align: center;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
  margin: 15px;
`;

const Status = styled.span`
  width: 20px;
  height: 20px;
  padding: 1px;
  margin: 15px;
  border-radius: 50%;
`;

const colorStatus = isOnline => {
  let Color;
  if (isOnline === true) {
    Color = ' #fe524b'; //Rojo
  } else {
    Color = '#4fae52'; //Verde
  }
  return Color;
};

export { colorStatus, Container, Image, ListItem, Status };

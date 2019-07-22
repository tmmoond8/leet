import React from "react";
import { Link } from 'react-router-dom';
import styled from '../../typed-components';

const MenuList = styled.ul`
  width: 100vw;
  height: 100vh;
  background-color: black;
  padding: 100px 25vw;
  font-size: 40px;
  color: white;

  li + li {
    padding-top: 32px;
  }
`;

const MenuItem = (props) => (
  <li>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>
)

const HomePresenter = ()  => (
  <MenuList>
    <MenuItem to="/chat">
      Chat
    </MenuItem>
    <MenuItem to="/filetree">
      File Tree
    </MenuItem>
  </MenuList>
);

export default HomePresenter;
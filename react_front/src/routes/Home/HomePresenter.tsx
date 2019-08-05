import React from "react";
import { Link } from 'react-router-dom';
import styled from '../../styles/typed-components';

const MenuList = styled.ul`
  width: 100%;
  height: 100%;
  padding: 100px 25%;
  font-size: 40px;

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
    <MenuItem to="/tutorial">
      기본 문제
    </MenuItem>
  </MenuList>
);

export default HomePresenter;
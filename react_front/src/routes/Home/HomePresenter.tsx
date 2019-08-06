import React from "react";
import Button from '../../components/Button';
import styled from '../../styles/typed-components';

const MenuList = styled.ul`
  width: 100%;
  height: 100%;
  padding: 100px 2rem;
  font-size: 40px;

  li + li {
    padding-top: 32px;
  }
`;

const MenuItem = (props) => (
  <li>
    <Button value={props.value} href={props.href}/>
  </li>
)

interface IProps {}

const HomePresenter = (props: IProps)  => (
  <MenuList>
    <MenuItem value="기본 문제" href="/tutorial"/>
  </MenuList>
);

export default HomePresenter;
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import styled from '../../styles/typed-components';

interface IProps extends RouteComponentProps {
  title: string;
}

const StyledHeader = styled.div`
  position: relative;
  height: 3rem;
  user-select: none;
  background-color: ${props => props.theme.color.violet};
  color: white;
  & > h1 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  & > span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: .5rem;
    cursor: pointer;
  }
`;

const HeaderPresenter = (props: IProps) => {
  const { title, history } = props;

  return (
    <StyledHeader>
      <h1>{title}</h1>
      <span onClick={() => history.goBack()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" fill="#ffffff"/></svg>
      </span>
    </StyledHeader>
  )
}

export default withRouter(HeaderPresenter);
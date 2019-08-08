import React from 'react';
import styled from '../../styles/typed-components';

interface IProps {
  title: string;
  onBack: () => void;
  Right?: React.ReactNode;
}

const StyledHeader = styled.div`
  position: relative;
  height: 3rem;
  user-select: none;
  background-color: ${props => props.theme.color.violet};
  color: white;
  -webkit-box-shadow: 0px 8px 14px -3px rgba(0,0,0,0.36);
  -moz-box-shadow: 0px 8px 14px -3px rgba(0,0,0,0.36);
  box-shadow: 0px 8px 14px -3px rgba(0,0,0,0.36);
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

const RightWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
`;

const HeaderPresenter = (props: IProps) => {
  const { title, onBack, Right } = props;

  return (
    <StyledHeader>
      <h1>{title}</h1>
      <span onClick={onBack}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" fill="#ffffff"/></svg>
      </span>
      <RightWrapper>
        {Right}
      </RightWrapper>
    </StyledHeader>
  )
}

export default HeaderPresenter;
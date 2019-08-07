import React from 'react';
import styled from '../../styles/typed-components';
import { IProps as HeaderProps} from './HeaderContainer'

const StyledHeaderLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

interface IProps {
  Header: React.ComponentElement<HeaderProps, any>;
  children: React.ReactNode;
}

const HeaderLayout = (props: IProps) => (
  <StyledHeaderLayout>
    {props.Header}
    {props.children}
  </StyledHeaderLayout>
)

export default HeaderLayout;
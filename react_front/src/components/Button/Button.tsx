import React from "react";
import { RouteComponentProps, withRouter } from 'react-router';
import styled, { withProps } from '../../styles/typed-components'

interface IProps extends RouteComponentProps {
  value: string;
  onClick?: any;
  disabled?: boolean;
  className?: string;
  href?: string;
  inline?: boolean;
}

const Container = withProps<IProps, HTMLInputElement>(styled.input)`
  width: ${props => props.inline ? 'auto': '100%'};
  background-color: ${props => props.theme.color.violet};
  color: white;
  text-transform: uppercase;
  padding: 15px;
  font-size: 16px;
  border: 0;
  cursor: pointer;
  font-weight: 500;
  text-align: center;
  border-radius: 1.5rem;
  &:active,
  &:focus {
    outline: none;
  }
  &:disabled {
    opacity: 0.8;
		cursor: not-allowed;
  }
`;

const Button: React.SFC<IProps> = ({
  value,
  onClick,
  disabled = false,
  className,
  history,
  href='',
  inline=false,
}) => (
  <Container
    value={value}
    onClick={onClick ? onClick : () => history.push(href)}
    disabled={disabled}
    className={className}
    type="submit"
    inline={inline}
  />
)


export default withRouter(Button);
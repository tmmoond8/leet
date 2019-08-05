import React from 'react';
import styled, { withProps } from '../../styles/typed-components';
import { getUser_GetUser_user } from '../../types/api';

interface IProps {
  user: getUser_GetUser_user;
  createdAt: number;
  text: string;
  mine: boolean;
}

const Mesage = withProps<IProps, HTMLDivElement>(styled.li)`
  color: #333333;
  border-radius: 1.2rem;
  
  & > p:first {
    display: flex; 
    padding: .8rem 0 .2rem 0;
  }

  .meta {
    display: flex;
    flex-direction: ${props => (props.mine ? 'row-reverse' : 'row')}
    padding: .8rem 0 .3rem 0;
    .nickname {
      font-size: 1.3rem;
    }
    .time {
      flex: 1;
      text-align: ${props => (props.mine ? 'left' : 'right')};
      font-size: 14px;
    }
  }

  .text {
    background-color: ${props => (props.mine ? props.theme.blueColor : props.theme.greyColor)};
    color: white;
    padding: 1rem 1.2rem;
    border-radius: 1.2rem;
    align-self: flex-end;
    margin: 0 1rem;
    border-top-left-radius: ${props => (!props.mine ? "0" : "1.2rem")};
    border-top-right-radius: ${props => (props.mine ? "0" : "1.2rem")};
  }
`;

const Message = (props: IProps) => {
  const { 
    createdAt,
    user,
    text,
    mine,
  } = props;
  const createdDate = new Date(createdAt);

  return (
    <Mesage mine={mine}>
      <p className="meta">
        <span className="nickname">{user.nickname}</span>
        <span className="time">{createdDate.toLocaleString()}</span>
      </p>
      <p className="text">{text}</p>
    </Mesage>
  )
}

export default Message;
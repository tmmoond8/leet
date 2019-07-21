import React from 'react';
import styled, { withProps } from '../../typed-components';

interface IProps {
  nickname: string;
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
    nickname,
    text,
    mine,
  } = props;
  const createdDate = new Date(createdAt);
  const dateModel = {
    year: createdDate.getFullYear(),
    month: createdDate.getMonth() + 1,
    date: createdDate.getDate(),
    hour: createdDate.getHours(),
    minute: createdDate.getMinutes()
  }
  const { hour, minute } = dateModel;

  return (
    <Mesage mine={mine}>
      <p className="meta">
        <span className="nickname">{nickname}</span>
        <span className="time">
          {hour > 12 ? 'AM' : 'PM'}
          {` ${Math.floor(hour%13 + hour/13)}:${minute}`}
        </span>
      </p>
      <p className="text">{text}</p>
    </Mesage>
  )
}

export default Message;
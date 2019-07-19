import React from 'react';

import { IMessage } from '../../types/models';

interface IProps {
  messageData : any;
}

interface IMessageProps {
  message: IMessage;
}

const textStyle = {
  backgroundColor: '#3498db',
  color: 'white',
  padding: '1rem 1.2rem',
  borderRadius: '1.2rem',
  alignSelf: 'flex-end',
  margin: '0 1rem',
}

const messageListStyle = {
  padding: '1rem'
}

const Message = (props: IMessageProps) => {
  const { 
    message: {
      createdAt,
      nickname,
      text,
    }
  } = props;
  const createdDate = new Date(createdAt);
  const dateModel = {
    year: createdDate.getFullYear(),
    month: createdDate.getMonth() + 1,
    date: createdDate.getDate(),
    hour: createdDate.getHours(),
    minute: createdDate.getMinutes()
  }
  const { year, month, date, hour, minute } = dateModel;

  return (
    <li>
      <p style={{ display: 'flex', paddingBottom: '.5rem' }}>
        <span style={{ fontSize: '1.3rem'}}>{nickname}</span>
        <span style={{ flex: '1', textAlign: 'right' }}>
          {`${year}-${month}-${date} `}
          {hour > 12 ? 'AM' : 'PM'}
          {` ${Math.floor(hour%13 + hour/13)}:${minute}`}
        </span>
      </p>
      <p style={textStyle}>{text}</p>
    </li>
  )
}

const ChatPresenter = (props: IProps) => {
  const { messageData } = props;
  if (!messageData || !messageData.GetMessages || !messageData.GetMessages.ok) {
    return <h2>fail to fetch data.</h2>;
  }
  const { 
    GetMessages: {
      messages
    } 
  } = messageData;
  return (
    <ul style={messageListStyle}>
      {
        Array.isArray(messages) && 
        messages.map((message: IMessage) => !!message && <Message message={message} key={message.id}/>)
      }
    </ul>
  );
}

export default ChatPresenter;
import React from 'react';

import Message from '../../components/Message';
import { IMessage } from '../../types/models';

interface IProps {
  inputText: string;
  messageData : any;
  onChangeInput: React.ChangeEventHandler<HTMLInputElement>;
  onSubmitMessage: (event: any) => void;
}

const messageListStyle = {
  padding: '1rem'
}


const ChatPresenter = (props: IProps) => {
  const { inputText, messageData, onChangeInput, onSubmitMessage } = props;
  if (!messageData || !messageData.GetMessages || !messageData.GetMessages.ok) {
    return <h2>fail to fetch data.</h2>;
  }
  const { 
    GetMessages: {
      messages
    } 
  } = messageData;
  return (
    <section>
      <ul style={messageListStyle}>
        {
          Array.isArray(messages) && 
          messages.map((message: IMessage) => !!message && <Message message={message} key={message.id}/>)
        }
      </ul>
      <div className="inputbar">
        <form onSubmit={onSubmitMessage}>
          <input 
            value={inputText} 
            placeholder="input your nickname" 
            onChange={onChangeInput}
            name="message"
          />
        </form>
      </div>
    </section>
  );
}

export default ChatPresenter;
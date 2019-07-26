import React from 'react';
import { MutationFn } from 'react-apollo';
import Input from '../../components/Input';
import Message from '../../components/Message';
import styled from '../../typed-components';
import { IMessage } from '../../types/models';

interface IProps {
  inputText: string;
  messageData : any;
  onChangeInput: React.ChangeEventHandler<HTMLInputElement>;
  onSubmitMessage: (event: any) => void;
  nickname: string;
  onLogout: MutationFn;
}

const MessageInputWrapper = styled.div`
  height: 50px;
  margin: 40px 20px;
`;

const MessageList = styled.ul`
  flex: 1;
  padding: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: -webkit-fill-available;
`;

const ChatPresenter = (props: IProps) => {
  const { inputText, messageData, onChangeInput, onSubmitMessage, nickname, onLogout } = props;
  if (!messageData || !messageData.GetMessages) {
    return <h2>fail to fetch data.</h2>;
  }

  if (!messageData.GetMessages.ok) {
    onLogout();
  }
  
  const { 
    GetMessages: {
      messages
    } 
  } = messageData;

  return (
    <Wrapper>
      {nickname}
      <MessageList>
        {
          Array.isArray(messages) && 
          messages.map((message: IMessage) => !!message && <Message {...message} mine={true} key={message.id}/>)
        }
      </MessageList>
      <MessageInputWrapper>
        <form onSubmit={onSubmitMessage}>
          <Input 
            value={inputText} 
            placeholder="input your message" 
            onChange={onChangeInput}
            name="message"
          />
        </form>
      </MessageInputWrapper>
    </Wrapper>
  );
}

export default ChatPresenter;
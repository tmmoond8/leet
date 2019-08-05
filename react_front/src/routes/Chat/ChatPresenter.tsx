import React from 'react';
import { MutationFn } from 'react-apollo';
import Input from '../../components/Input';
import Message from '../../components/Message';
import styled, { withProps } from '../../styles/typed-components';
import { getMessages_GetMessages_messages , getUser_GetUser_user } from '../../types/api';

interface IProps {
  inputText: string;
  messageData : any;
  onChangeInput: React.ChangeEventHandler<HTMLInputElement>;
  onSubmitMessage: (event: any) => void;
  onLogout: MutationFn;
  user: getUser_GetUser_user | null;
}

const MessageInputWrapper = styled.div`
  height: 50px;
  margin: 40px 20px;
`;

const MessageList = withProps<{ref: any}, HTMLUListElement>(styled.ul)`
  flex: 1;
  padding: 1rem;
  overflow: scroll;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: -webkit-fill-available;
`;

const ChatPresenter = (props: IProps) => {
  const { inputText, messageData, onChangeInput, onSubmitMessage, onLogout, user } = props;
  const messagesRef  = React.createRef<HTMLUListElement>();
  React.useEffect(() => {  
    const current: HTMLUListElement | null = messagesRef.current;
    if (current !== null) {
      current.scrollTop = current.scrollHeight;
    }
  });

  if (!messageData || !messageData.GetMessages) {
    return <h2>loading</h2>;
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
      <MessageList ref={messagesRef}>
        {
          Array.isArray(messages) && !!user &&
          messages.map((message: getMessages_GetMessages_messages) => (
            <Message {...message} mine={message.user.id === user.id} key={message.id}/>
          ))
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
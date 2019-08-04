import React from 'react';
import Input from '../../components/Input';
import styled from '../../typed-components';

const StyledJoinChat = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  
  form {
    height: 100px;
    width: 300px;
    input {
      height: 50px;
      text-align: center;
    }
  }
`;

interface IProps {
  nickname: string;
  onChangeInput: React.ChangeEventHandler<HTMLInputElement>;
  onJoinChat: (event: any) => void;
}

const JoinChat = (props: IProps) => {
  const { nickname, onChangeInput, onJoinChat } = props;
  return (
    <StyledJoinChat>
      <form>
          <Input 
            value={nickname} 
            placeholder="input your nickname" 
            onChange={onChangeInput}
            name="nickname"
          />
          <Input
            value="Join"
            type="button"
            onChange={null}
            onClick={onJoinChat}
          />
        </form>
    </StyledJoinChat>
  )
}

export default JoinChat;
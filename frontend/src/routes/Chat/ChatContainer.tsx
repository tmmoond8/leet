import React from 'react';
import { Mutation, MutationFn, Query } from 'react-apollo';
import {
  getMessages,
  sendMessage,
  sendMessageVariables,
} from '../../types/api';
import {
  GET_MESSAGES,
  SEND_MESSAGE,
} from './Chat.queries';
import ChatPresenter from './ChatPresenter';

interface IProps {}
interface IState {
  inputText: string;
}

class ChatQuery extends Query<getMessages> {}
class SendMessageMutation extends Mutation<sendMessage, sendMessageVariables> {}

export default class ChatContainer extends React.Component<IProps, IState> {
  public sendMessageMutation: MutationFn<sendMessage, sendMessageVariables> | undefined;
  
  constructor(props: IProps) {
    super(props);
    this.state = {
      inputText: '',
    }
  }

  public render() {
    const { inputText } = this.state;
    return (
      <ChatQuery query={GET_MESSAGES}>
        {({ data }) => (
          <SendMessageMutation mutation={SEND_MESSAGE}>
            {sendMessageMutation => {
              this.sendMessageMutation = sendMessageMutation;
              return (
                <ChatPresenter 
                  inputText={inputText}
                  messageData={data}
                  onChangeInput={this.handleChangeInput}
                  onSubmitMessage={this.handleSubmitMessage}
                />
              );
            }}
          </SendMessageMutation>
        )}
      </ChatQuery>
    )
  }

  public handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { target: { value} } = event;
    this.setState({
      inputText: value
    })
  }

  public handleSubmitMessage = (event) => {
    event.preventDefault();
    const { inputText } = this.state;
    if (this.sendMessageMutation) {
      this.sendMessageMutation({
        variables: {
          nickName: 'test',
          text: inputText
        }
      });
      this.setState({
        inputText: ''
      })
    }
  }
}

import React from 'react';
import { Mutation, MutationFn, Query } from 'react-apollo';
import {
  getMessages,
  sendMessage,
  sendMessageVariables,
} from '../../types/api';
import { IMessage } from '../../types/models';
import {
  GET_MESSAGES,
  SEND_MESSAGE,
} from './Chat.queries';
import ChatPresenter from './ChatPresenter';

interface IProps {}
interface IState {
  messages: IMessage[];
}

class ChatQuery extends Query<getMessages> {}
class SendMessageMutation extends Mutation<sendMessage, sendMessageVariables> {}

export default class ChatContainer extends React.Component<IProps, IState> {
  public sendMessageMutation: MutationFn<sendMessage, sendMessageVariables> | undefined;
  
  constructor(props: IProps) {
    super(props);
    this.state = {
      messages: []
    }
  }

  public render() {
    return (
      <ChatQuery query={GET_MESSAGES}>
        {({ data }) => (
          <SendMessageMutation mutation={SEND_MESSAGE}>
            {sendMessageMutation => {
              this.sendMessageMutation = sendMessageMutation;
              return <ChatPresenter messageData={data}/>;
            }}
          </SendMessageMutation>
        )}
      </ChatQuery>
    )
  }

  
}

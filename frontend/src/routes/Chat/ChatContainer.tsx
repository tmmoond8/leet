import { SubscribeToMoreOptions } from 'apollo-client';
import React from 'react';
import { Mutation, MutationFn, Query } from 'react-apollo';
import { RouteComponentProps } from 'react-router-dom';
import {
  getMessages,
  sendMessage,
  sendMessageVariables,
} from '../../types/api';
import {
  GET_MESSAGES,
  SEND_MESSAGE,
  SUBSCRIBE_TO_MESSAGES,
} from './Chat.queries';
import ChatPresenter from './ChatPresenter';

interface IProps extends RouteComponentProps<any> {
  isLoggined: boolean;
}
interface IState {
  message: string;
  nickname: string;
}

class ChatQuery extends Query<getMessages> {}
class SendMessageMutation extends Mutation<sendMessage, sendMessageVariables> {}

export default class ChatContainer extends React.Component<IProps, IState> {
  public sendMessageMutation: MutationFn<sendMessage, sendMessageVariables> | undefined;
  
  constructor(props: IProps) {
    super(props);
    this.state = {
      message: '',
      nickname: '',
    }
  }

  public render() {
    const { isLoggined } = this.props;
    const { message, nickname } = this.state;
    return (
      <ChatQuery query={GET_MESSAGES}>
        {({ data, subscribeToMore }) => {
          const subscribeToMoreOptions: SubscribeToMoreOptions = {
            document: SUBSCRIBE_TO_MESSAGES,
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) {
                return prev;
              }
              const {
                data: { MessageSubscription } 
              } = subscriptionData;
              const {
                GetMessages: {
                  messages
                }
              } = prev;
              const newMessageId = MessageSubscription.id;
              const latestMessageId = messages.length > 0 ? messages[messages.length - 1].id : -1;
              if(latestMessageId === newMessageId) {
                return prev;
              }
              const updatedData = Object.assign({}, prev, {
                GetMessages: {
                  messages: [
                    ...messages,
                    MessageSubscription
                  ]
                }
              });
              return updatedData;
            }
          }
          subscribeToMore(subscribeToMoreOptions);
          return (
            <SendMessageMutation mutation={SEND_MESSAGE}>
              {sendMessageMutation => {
                this.sendMessageMutation = sendMessageMutation;
                return (
                  <ChatPresenter 
                    inputText={message}
                    messageData={data}
                    onChangeInput={this.handleChangeInput}
                    onSubmitMessage={this.handleSubmitMessage}
                    isLoggined={isLoggined}
                    nickname={nickname}
                  />
                );
              }}
            </SendMessageMutation>
          )
        }}
      </ChatQuery>
    )
  }

  public handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { target: { value, name } } = event;
    this.setState({
      [name]: value
    } as any)
  }

  public handleSubmitMessage = (event) => {
    event.preventDefault();
    const { message } = this.state;
    if (this.sendMessageMutation) {
      this.sendMessageMutation({
        variables: {
          nickName: 'test',
          text: message
        }
      });
      this.setState({
        message: ''
      })
    }
  }
}

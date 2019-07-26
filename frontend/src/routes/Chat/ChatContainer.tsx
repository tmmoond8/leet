import { SubscribeToMoreOptions } from 'apollo-client';
import React from 'react';
import { Mutation, MutationFn, Query } from 'react-apollo';
import { RouteComponentProps } from 'react-router-dom';
import { LOG_USER_IN, LOG_USER_OUT } from '../../innerQueries';
import {
  getMessages,
  joinChat,
  joinChatVariables,
  sendMessage,
  sendMessageVariables,
} from '../../types/api';
import {
  GET_MESSAGES,
  JOIN_CHAT,
  SEND_MESSAGE,
  SUBSCRIBE_TO_MESSAGES,
} from './Chat.queries';
import ChatPresenter from './ChatPresenter';
import JoinChat from './JoinChat';

interface IProps extends RouteComponentProps<any> {
  isLoggined: boolean;
}
interface IState {
  message: string;
  nickname: string;
}

class ChatQuery extends Query<getMessages> {}
class SendMessageMutation extends Mutation<sendMessage, sendMessageVariables> {}
class JoinChatMutation extends Mutation<joinChat, joinChatVariables> {}

export default class ChatContainer extends React.Component<IProps, IState> {
  public sendMessageMutation: MutationFn<sendMessage, sendMessageVariables> | undefined;
  public joinChatMutation: MutationFn<joinChat, joinChatVariables> | undefined;
  
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
      isLoggined ? (
        <ChatQuery 
          query={GET_MESSAGES}
        >
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
              <Mutation mutation={LOG_USER_OUT}>
                {logoutMutation => (
                  <SendMessageMutation mutation={SEND_MESSAGE}>
                    {sendMessageMutation => {
                      this.sendMessageMutation = sendMessageMutation;
                      return (
                        <ChatPresenter 
                          inputText={message}
                          messageData={data}
                          onChangeInput={this.handleChangeInput}
                          onSubmitMessage={this.handleSubmitMessage}
                          nickname={nickname}
                          onLogout={logoutMutation}
                        />
                      );
                    }}
                  </SendMessageMutation>
                )}
              </Mutation>
            )
          }}
          </ChatQuery>
      ) : (
        <Mutation mutation={LOG_USER_IN}>
          {logUserIn => (
            <JoinChatMutation 
              mutation={JOIN_CHAT}
              onCompleted={data => {
                const { JoinChat: { token='' } = {}} = data || {};
                logUserIn({
                  variables: {
                    token
                  }
                });
              }}
            >
              {joinChatMutation => {
                this.joinChatMutation = joinChatMutation;
                return (
                  <JoinChat 
                    nickname={nickname}
                    onChangeInput={this.handleChangeInput}
                    onJoinChat={this.handleJoinChat}
                  />
                );
              }}
            </JoinChatMutation>
          )}  
        </Mutation>
      )
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
          text: message
        }
      });
      this.setState({
        message: ''
      })
    }
  }

  public handleJoinChat = async (event) => {
    event.preventDefault();
    const { nickname } = this.state;
    if (this.joinChatMutation) {
      try {
        await this.joinChatMutation({
          variables: {
            nickname
          }
        });
      } catch (error) {
        console.error(error);
      }
    }
  }

  public handleLogout = () => {
    
  }
}

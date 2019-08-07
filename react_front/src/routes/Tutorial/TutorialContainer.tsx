import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { RouteComponentProps } from 'react-router';
import {
  getInitial,
  getInitial_GetInitial_data
} from '../../types/api';
import {
  GET_INITIAL
} from './Tutorial.queries';
import TutorialPresenter from './TutorialPresenter';

interface IProps extends RouteComponentProps<any> {}

interface IState {
  quiz: object;
}

class InitialQuery extends Query<getInitial> {}

class TutorialContainer extends Component<IProps, IState> {

  render() {
    return (
      <InitialQuery query={GET_INITIAL}>
        {({ data: { GetInitial: { data=[] } = {} } = { GetInitial: { data: [] } } }) => {
          const initialQuiz = this.leveling(data as any);
          return (
            <TutorialPresenter tutorials={initialQuiz} onMoveQuiz={this.handleMoveQuiz(initialQuiz)}/>
          )
        }}
      </InitialQuery>
    )
  }

  leveling(initialData: getInitial_GetInitial_data[]) {
    return initialData.reduce((accum, i) => (
      accum[i.level] = (accum[i.level] || []).concat(i),
      accum
    ), {})
  }

  handleMoveQuiz = (initialQuiz) => (level: number) => {
    const { history } = this.props;
    history.push({
      pathname: "/quiz",
      state: {
        title: `Level ${level}`,
        quizs: initialQuiz[level]
      }
    })
  }
}

export default TutorialContainer;
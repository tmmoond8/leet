import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { RouterProps } from 'react-router';
import {
  getInitial,
  getInitial_GetInitial_data
} from '../../types/api';
import {
  GET_INITIAL
} from './Tutorial.queries';
import TutorialPresenter from './TutorialPresenter';

interface IProps extends RouterProps {}

interface IState {}

class TutorialQuery extends Query<getInitial> {}

class TutorialContainer extends Component<IProps, IState> {
  render() {
    return (
      <TutorialQuery query={GET_INITIAL}>
        {({ data: { GetInitial: { data=[] } = {} } = { GetInitial: { data: [] } } }) => (
          <TutorialPresenter tutorials={this.leveling(data as any)}/>
        )}
      </TutorialQuery>
    )
  }

  leveling(initialData: getInitial_GetInitial_data[]) {
    return initialData.reduce((accum, i) => (
      accum[i.level] = (accum[i.level] || []).concat(i),
      accum
    ), {})
  }
}

export default TutorialContainer;
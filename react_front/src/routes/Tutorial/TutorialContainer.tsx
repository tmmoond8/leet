import React, { Component } from 'react';
// import { Query } from 'react-apollo';
// import {

// } from '../../types/api';
// import {

// } from './Tutorial.queries';
import TutorialPresenter from './TutorialPresenter';

interface IProps {

}

interface IState {

}

class TutorialContainer extends Component<IProps, IState> {
  render() {
    return (
      <TutorialPresenter/>
    )
  }
}

export default TutorialContainer;
import React, { Component } from 'react';
import { RouterProps } from 'react-router';
import HomePresenter from './HomePresenter';

interface IProps extends RouterProps{

}

interface IState {

}

class HomeContainer extends Component<IProps, IState> {
  render() {
    return (
      <HomePresenter link={this.handleLink}/>
    )
  }

  handleLink = (href: string) => {
    const { history } = this.props;
    history.push(href);
  }
}

export default HomeContainer;
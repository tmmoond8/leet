import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import HeaderPresenter from './HeaderPresenter';

interface IProps extends RouteComponentProps {
  title: string;
}

class HeaderContainer extends React.Component<IProps> {
  render() {
    const { title, history } = this.props;
    return (
      <HeaderPresenter title={title} onBack={() => history.goBack()}/>
    );
  }
}

export default withRouter(HeaderContainer);
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import HeaderPresenter from './HeaderPresenter';

export interface IProps extends RouteComponentProps {
  title: string;
  Right?: React.ReactNode;
}

class HeaderContainer extends React.Component<IProps> {
  render() {
    const { title, history, Right } = this.props;
    return (
      <HeaderPresenter title={title} onBack={() => history.goBack()} Right={Right}/>
    );
  }
}

export default withRouter(HeaderContainer);
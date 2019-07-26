import React from "react";
import { graphql } from "react-apollo";
import GlobalStyle from "../../global-styles";
import { IS_LOGGED_IN } from '../../innerQueries';
import { theme } from '../../theme';
import { ThemeProvider } from '../../typed-components';
import AppPresenter from './AppPresenter';

const AppContainer : any = ({ data })  => (
  <>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
      <AppPresenter isLoggedIn={data.auth.isLoggedIn}/>
    </ThemeProvider>
  </>
);

export default graphql(IS_LOGGED_IN)(AppContainer);
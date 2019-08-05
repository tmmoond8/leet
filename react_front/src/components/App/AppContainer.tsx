import React from "react";
import { graphql } from "react-apollo";
import { IS_LOGGED_IN } from '../../innerQueries';
import GlobalStyle from "../../styles/global-styles";
import { theme } from '../../styles/theme';
import { ThemeProvider } from '../../styles/typed-components';
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